let base = process.env.PWD;
let Mate = require(base + '/models/mates');

let createMate = function (req, res) {
    let mate = new Mate(req.body);
    mate.save(function (err, mate) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.status(200).json(mate);
    });
};

let getMates = function (req, res) {
    Mate.find(function (err, mates) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).json(mates);
    });
};

let getMate = function (req, res) {
    Mate.findById(req.params.id, function (err, mate) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).json(mate);
    });
};

let getMateByEmail = function (req, res) {
    Mate.findOne({email: req.params.email}, function (err, mate) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).json(mate);
    });
};

let updateMate = function (req, res) {
    Mate.findById(req.params.id, function (err, mate) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        if (req.body.name) {
            mate.name = req.body.name;
        }

        if (req.body.rooms) {
            mate.rooms = req.body.rooms;
        }

        mate.save(function (err, mate) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).json(mate);
        });
    });
};

let deleteMate = function (req, res) {
    Mate.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).json({'deleted': true});
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