var base = process.env.PWD;
var Room = require(base + '/models/rooms');
var Mate = require(base + '/models/mates');
var uuidV4 = require('uuid/v4');

var createRoom = function(req, res){
  var room = new Room(req.body);
  room.count = 1;
  room.recentlyAdded = room.admin;
  room.key = uuidV4();
  Mate.findById(room.admin, function(err, mate){
    if(err){
      res.send(500, err);
    }

    room.save(function(err, room){
      if(err){
        res.send(500, err);
      }
      mate.rooms.push({_id: room._id , name: room.name});
      mate.save((err, mate) => {
        if(err){
          res.send(500, err);
        }
      });
      res.json(200, room);
    });
  });
};

var getRooms = function (req, res){
  Room.find(function(err, rooms){
    if(err){
      res.send(500, err);
    }
    res.json(200, rooms)
  });
};

var getRoom = function(req, res){
  Room.findById(req.params.id, function(err, room){
      if(err){
        res.send(500, err);
      }
      res.json(200, room);
  });
};

var updateRoom = function(req, res){
  Room.findById(req.params.id, function(err, room){
    if(err){
      res.send(500, err);
    }
    if(req.body.name){
      room.name = req.body.name;
    }

    room.save(function(err, room){
      if(err){
        res.send(500, err);
      }
      res.json(200, room);
    });
  });
};

var deleteRoom = function(req, res){
  Room.findByIdAndRemove(req.params.id, function(err, room){
    if(err){
      res.send(500, err);
    }
    res.json(200, {'deleted': true});
  });
}

var addMateToRoom = async function(req, res){
  let query = Room.where({key: req.params.roomKey});
  query.findOne(async function(err, room){
    if(err){
      res.send(500, err);
    }

    if(room.count > 1){
      const unique = [...new Set(room.balances.map(item => item.aid))];

      for(let id of unique){
        room.balances.push({aid:id, bid:req.params.mateId, owed: 0});
      }

      room.balances.push({aid:room.recentlyAdded, bid:req.paarams.mateId, owed: 0});
    }else{
      room.balances.push({aid:room.admin, bid:req.params.mateId, owed: 0});
      room.recentlyAdded = req.params.mateId;
    }

    room.count = room.count + 1;

    await Mate.findById(req.params.mateId, async function(err, mate){
      if(err){
        res.send(500, err);
      }

      for(let mateRoom of mate.rooms){
        if(mateRoom._id == room._id){
          res.send(500, 'User already in this room');
        }
      }

      mate.rooms.push({_id: room._id, name: room.name});

      await mate.save(function(err, room){
        if(err){
          res.send(500, err);
        }
      });
    });

    room.save(function(err, room){
      if(err){
        res.send(500, err);
      }
      res.json(200, room);
    });
  });
}

module.exports = {
  createRoom,
  getRooms,
  getRoom,
  updateRoom,
  deleteRoom,
  addMateToRoom
};