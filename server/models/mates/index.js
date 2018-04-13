var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MateSchema = new Schema({
	name: String,
	rooms: [{_id: Schema.Types.ObjectId, name: String}],
});

module.exports = mongoose.model('Mate', MateSchema);