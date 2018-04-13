var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  title: String,
  description: String,
	fromid: Schema.Types.ObjectId,
	toid: Schema.Types.ObjectId,
	amount: Number,
	date: Date
});

module.exports = mongoose.model('Transaction', TransactionSchema);