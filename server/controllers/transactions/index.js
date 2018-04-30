var base = process.env.PWD;
var Transaction = require(base + '/models/transactions');
var Room = require(base + '/models/rooms');

var createTransaction = async function(req, res){
	let transaction = new Transaction(req.body);
	transaction.save(function(err, transaction){
		if(err){
			res.send(500, err);
		}

    saveDebt(transaction.roomid, transaction.fromid, transaction.toid, transaction.amount).then(res => {
      balanceDebts(transaction.roomid);
    });

		res.json(200, transaction);
	});
};

async function saveDebt(roomid, fromid, toid, amount){
  return new Promise((resolve, reject) => { Room.findById(roomid, function(err, room){
      if(err){
        reject('Error finding room');
      }

      for(let index = 0; index < room.balances.length; index++){
        let record = JSON.parse(JSON.stringify(room.balances[index])); //Silly, but removes all the mongo stuff

        let fromKey = getKey(record, fromid);
        let toKey = getKey(record, toid);

        if(fromKey == 'aid' && toKey == 'bid'){
          room.balances[index].owed -= amount;
          room.save((err, room) => {
            console.log('saving debt' + err);
            resolve('saved');
          });
        }else if(fromKey == 'bid' && toKey == 'aid'){
          room.balances[index.owed] += amount;
          room.save((err, room) => {
            console.log('saving debt' + err);
            resolve('saved');
          });
        }
      }
    });
  });
}

async function balanceDebts(roomid){
  await Room.findById(roomid, function(err, room){
    if(err){
      return;
    }

    //Gather all mates
    let mateSet = [...new Set(room.balances.map(item => item.aid).concat(room.balances.map(item => item.bid)))];;

    let mateBalances = new Array();

    //Determine their overall debts to the room
    for(let mate of mateSet){
      let debtAmount = 0;
      for(let record of room.balances){
        record = JSON.parse(JSON.stringify(record));
        if(record.owed != 0){
          let key = getKey(record, mate);

          if(key == 'aid'){
            debtAmount += record.owed;
          }else if(key == 'bid'){
            debtAmount -= record.owed;
          }
        }
      }
      mateBalances.push({id: mate, debt: debtAmount});
    }

    let debtors = new Array();
    let creditors = new Array();

    //Determine who needs to net give money and who needs to net receive money
    for(let mate of mateBalances){
      if(mate.debt > 0){
        debtors.push(mate);
      }else if(mate.debt < 0){
        creditors.push(mate);
      }
    }

    debtors.sort((a,b) => b.debt - a.debt);
    creditors.sort((a,b) => a.debt - b.debt);

    //0 out balances
    for(let index = 0; index < room.balances.length; index++){
      room.balances[index].owed = 0;
    }

    //Redistribute balances
    for(let debtor of debtors){
      while(debtor.debt > 0){
        let creditor = creditors[0];
        amount = Math.min(debtor.debt, -creditor.debt);
        creditor.debt += amount;
        debtor.debt -= amount;
        if(creditor.debt == 0){
          creditors.shift();
        }

        for(let i = 0; i < room.balances.length; i++){
          let record = room.balances[i];
          if(record.aid == debtor.id && record.bid == creditor.id){
            room.balances[i].owed = amount;
          }else if(record.aid == creditor.id && record.bid == debtor.id){
            room.balances[i].owed = -amount;
          }
        }
      }
    }

    room.save((err, room) => {
      console.log('balancing debt' + err);
    });
  });
}

function getKey(object, value){
  let key = Object.keys(object).find(key => {return object[key] == value;});
  return key;
}

var getTransactions = function(req, res){
	Transaction.find(function(err, transactions){
		if(err){
			res.send(500, err);
		}
		res.json(200, transactions)
	});
};

var getTransaction = function(req, res){
	Transaction.findById(req.params.id, function(err, transaction){
	    if(err){
	    	res.send(500, err);
	    }
	    res.json(200, transaction);
	});
};

var updateTransaction = function(req, res){
	Transaction.findById(req.params.id, function(err, transaction){
		if(err){
			res.send(500, err);
		}
		if(req.body.amount){
			transaction.amount = req.body.amount;
		}

		transaction.save(function(err, transaction){
			if(err){
				res.send(500, err);
			}
			res.json(200, transaction);
		});
	});
};

var deleteTransaction = function(req, res){
	Transaction.findByIdAndRemove(req.params.id, function(err, transaction){
		if(err){
			res.send(500, err);
		}
		res.json(200, {'deleted': true});
	});
}

module.exports = {
	createTransaction,
	getTransactions,
	getTransaction,
	updateTransaction,
	deleteTransaction
};