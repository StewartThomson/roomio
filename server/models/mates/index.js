let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MateSchema = new Schema({
    name: String,
    email: String,
    rooms: [{_id: Schema.Types.ObjectId, name: String}],
});

module.exports = mongoose.model('Mate', MateSchema);