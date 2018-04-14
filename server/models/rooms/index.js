var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoomSchema = new Schema({
  name: String,
  balances: [{aid: Schema.Types.ObjectId, bid: Schema.Types.ObjectId, owed: Number}],
  admin: Schema.Types.ObjectId,
  recentlyAdded: Schema.Types.ObjectId,
  count: Number
});

module.exports = mongoose.model('Room', RoomSchema);