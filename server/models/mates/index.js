var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MateSchema = new Schema({
	//_id: Schema.Types.ObjectId,
	name: String,
	balances: [{_id: Schema.Types.ObjectId, name: String, owedTo: Number}],
});

module.exports = mongoose.model('Mate', MateSchema);