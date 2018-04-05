var base = process.env.PWD;
var Transaction = require(base + '/models/transactions');

var createTransaction = function(req, res){
	var transaction = new Transaction(req.body);
	transaction.save(function(err, transaction){
		if(err){
			res.send(500, err);
		}
		res.json(200, transaction);
	});
};

var getTransactions = function (req, res){
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