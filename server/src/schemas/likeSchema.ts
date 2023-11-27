const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    likedUser: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;