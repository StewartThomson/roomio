var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoomSchema = new Schema({
  name: String,
  balances: [{aid: Schema.Types.ObjectId, bid: Schema.Types.ObjectId, aname: String, bname: String, owed: {type: Number, default: 0}}],
  admin: Schema.Types.ObjectId,
  recentlyAdded: Schema.Types.ObjectId,
  count: Number,
  key: String
});

module.exports = mongoose.model('Room', RoomSchema);