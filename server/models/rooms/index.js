let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let RoomSchema = new Schema({
    name: String,
    balances: [{
        aid: Schema.Types.ObjectId,
        bid: Schema.Types.ObjectId,
        aname: String,
        bname: String,
        owed: {type: Number, default: 0}
    }],
    admin: {id: Schema.Types.ObjectId, name: String},
    recentlyAdded: {id: Schema.Types.ObjectId, name: String},
    count: Number,
    key: String
});

module.exports = mongoose.model('Room', RoomSchema);