var base = process.env.PWD;
var Room = require(base + '/models/rooms');

var createRoom = function(req, res){
  var room = new Room(req.body);
  room.count = 1;
  room.recentlyAdded = room.admin;
  room.save(function(err, room){
    if(err){
      res.send(500, err);
    }
    res.json(200, room);
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

var addMateToRoom = function(req, res){
  Room.findById(req.params.roomId, function(err, room){
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