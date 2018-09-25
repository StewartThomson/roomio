let base = process.env.PWD;
let Mate = require(base + '/models/mates');

let createMate = function (req, res) {
    let mate = new Mate(req.body);
    mate.save(function (err, mate) {
        if (err) {
            res.send(500, err);
        }

        res.json(200, mate);
    });
};

let getMates = function (req, res) {
    Mate.find(function (err, mates) {
        if (err) {
            res.send(500, err);
        }
        res.json(200, mates)
    });
};

let getMate = function (req, res) {
    Mate.findById(req.params.id, function (err, mate) {
        if (err) {
            res.send(500, err);
        }
        res.json(200, mate);
    });
};

let getMateByEmail = function (req, res) {
    Mate.findOne({email: req.params.email}, function (err, mate) {
        if (err) {
            res.send(500, err);
        }
        res.json(200, mate);
    });
};

let updateMate = function (req, res) {
    Mate.findById(req.params.id, function (err, mate) {
        if (err) {
            res.send(500, err);
        }
        if (req.body.name) {
            mate.name = req.body.name;
        }

        if (req.body.rooms) {
            mate.rooms = req.body.rooms;
        }

        mate.save(function (err, mate) {
            if (err) {
                res.send(500, err);
            }
            res.json(200, mate);
        });
    });
};

let deleteMate = function (req, res) {
    Mate.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.send(500, err);
        }
        res.json(200, {'deleted': true});
    });
};

module.exports = {
	createMate,
	getMates,
	getMate,
	updateMate,
	deleteMate,
  getMateByEmail
};