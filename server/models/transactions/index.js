var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  title: String,
  description: String,
  roomid: Schema.Types.ObjectId,
	fromid: Schema.Types.ObjectId,
	toid: Schema.Types.ObjectId,
	amount: Number,
	date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Transaction', TransactionSchema);