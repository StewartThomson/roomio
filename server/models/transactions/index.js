var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
	fromid: Schema.Types.ObjectId,
	from: String,
	toid: Schema.Types.ObjectId,
	to: String,
	amount: Number,
	date: Date
});

module.exports = mongoose.model('Transaction', TransactionSchema);