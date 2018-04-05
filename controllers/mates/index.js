var base = process.env.PWD;
var Mate = require(base + '/models/mates');

var createMate = function(req, res){
	var mate = new Mate(req.body);
	mate.save(function(err, mate){
		if(err){
			res.send(500, err);
		}
		var nameInsert = mate.name;
		var newId = mate._id;
		Mate.updateMany({_id: {$ne: newId}}, {"$push": {"balances":{"_id":newId, "name":nameInsert, "owedTo":0}}},  function(err, raw){
	      	if(err) {
	      		console.log(err)
	      	}
	    });
		Mate.find({_id: {$ne: newId}}, function(err, mates){
			console.log(mates);
			mates.forEach(function(user){
				console.log(user);
	      		Mate.updateOne({_id: {$eq: newId}}, {"$push": {"balances":{"_id":user._id, "name":user.name, "owedTo": 0}}}, function(err, raw){
	      			if(err) {
	      				console.log(err)
	      			}
	      		});
			});
		});
		
		res.json(200, mate);
	});
};

var getMates = function (req, res){
	Mate.find(function(err, mates){
		if(err){
			res.send(500, err);
		}
		res.json(200, mates)
	});
};

var getMate = function(req, res){
	Mate.findById(req.params.id, function(err, mate){
	    if(err){
	    	res.send(500, err);
	    }
	    res.json(200, mate);
	});
};

var updateMate = function(req, res){
	Mate.findById(req.params.id, function(err, mate){
		if(err){
			res.send(500, err);
		}
		if(req.body.name){
			mate.name = req.body.name;
		}

		mate.save(function(err, mate){
			if(err){
				res.send(500, err);
			}
			res.json(200, mate);
		});
	});
};

var deleteMate = function(req, res){
	Mate.findByIdAndRemove(req.params.id, function(err, mate){
		if(err){
			res.send(500, err);
		}
		res.json(200, {'deleted': true});
	});
}

module.exports = {
	createMate,
	getMates,
	getMate,
	updateMate,
	deleteMate
};