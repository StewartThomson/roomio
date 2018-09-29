let base = process.env.PWD;
let Room = require(base + '/models/rooms');
let Mate = require(base + '/models/mates');
let uuidV4 = require('uuid/v4');

let createRoom = function (req, res) {
    let room = new Room(req.body);
    room.count = 1;
    room.recentlyAdded = room.admin;
    room.key = uuidV4();
    Mate.findById(room.admin.id, function (err, mate) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        room.save(function (err, room) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            mate.rooms.push({_id: room._id, name: room.name});
            mate.save((err) => {
                if (err) {
                    res.status(500).send(err);
                }
            });
            res.status(200).json(room);
        });
    });
};

let getRooms = function (req, res) {
    Room.find(function (err, rooms) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).json(rooms);
    });
};

let getRoom = function (req, res) {
    Room.findById(req.params.id, function (err, room) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).json(room);
    });
};

let updateRoom = function (req, res) {
    Room.findById(req.params.id, function (err, room) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        if (req.body.name) {
            room.name = req.body.name;
        }

        room.save(function (err, room) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).json(room);
        });
    });
};

let deleteRoom = function (req, res) {
    Room.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json({'deleted': true});
    });
};

let addMateToRoom = async function (req, res) {
    let query = Room.where({key: req.body.roomKey});
    query.findOne(async function (err, room) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        let addId = req.body.id;
        let addName = req.body.name;

        if (room.count > 1) {
            const unique = [...new Set(room.balances.map(item => {
                return {id: item.aid, name: item.aname};
            }))];

            for (let mate of unique) {
                room.balances.push({aid: mate.id, bid: addId, aname: mate.name, bname: addName, owed: 0});
            }
        }

        room.balances.push({
            aid: room.recentlyAdded.id,
            bid: addId,
            aname: room.recentlyAdded.name,
            bname: addName,
            owed: 0
        });
        room.recentlyAdded.id = addId;
        room.recentlyAdded.name = addName;

        room.count = room.count + 1;

        await Mate.findById(addId, async function (err, mate) {
            if (err) {
                res.status(500).send(err);
                return
            }

            for (let mateRoom of mate.rooms) {
                if (mateRoom._id === room._id) {
                    res.status(500).send('User already in this room');
                    return;
                }
            }

            mate.rooms.push({_id: room._id, name: room.name});

            await mate.save(function (err) {
                if (err) {
                    res.status(500).send(err);
                }
            });
        });

        room.save(function (err, room) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).json(room);
        });
    });
};

module.exports = {
  createRoom,
  getRooms,
  getRoom,
  updateRoom,
  deleteRoom,
  addMateToRoom
};