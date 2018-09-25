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
            res.send(500, err);
        }

        room.save(function (err, room) {
            if (err) {
                res.send(500, err);
            }
            mate.rooms.push({_id: room._id, name: room.name});
            mate.save((err) => {
                if (err) {
                    res.send(500, err);
                }
            });
            res.json(200, room);
        });
    });
};

let getRooms = function (req, res) {
    Room.find(function (err, rooms) {
        if (err) {
            res.send(500, err);
        }
        res.json(200, rooms)
    });
};

let getRoom = function (req, res) {
    Room.findById(req.params.id, function (err, room) {
        if (err) {
            res.send(500, err);
        }
        res.json(200, room);
    });
};

let updateRoom = function (req, res) {
    Room.findById(req.params.id, function (err, room) {
        if (err) {
            res.send(500, err);
        }
        if (req.body.name) {
            room.name = req.body.name;
        }

        room.save(function (err, room) {
            if (err) {
                res.send(500, err);
            }
            res.json(200, room);
        });
    });
};

let deleteRoom = function (req, res) {
    Room.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.send(500, err);
        }
        res.json(200, {'deleted': true});
    });
};

let addMateToRoom = async function (req, res) {
    let query = Room.where({key: req.body.roomKey});
    query.findOne(async function (err, room) {
        if (err) {
            res.send(500, err);
        }

        let addId = req.body.id;
        let addName = req.body.name;

        if (room.count > 1) {
            const unique = [...new Set(room.balances.map(item => {
                item = {id: item.aid, name: item.aname};
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

        await Mate.findById(req.params.mateId, async function (err, mate) {
            if (err) {
                res.send(500, err);
            }

            for (let mateRoom of mate.rooms) {
                if (mateRoom._id === room._id) {
                    res.send(500, 'User already in this room');
                }
            }

            mate.rooms.push({_id: room._id, name: room.name});

            await mate.save(function (err) {
                if (err) {
                    res.send(500, err);
                }
            });
        });

        room.save(function (err, room) {
            if (err) {
                res.send(500, err);
            }
            res.json(200, room);
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