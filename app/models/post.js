/**
 * Created by gustavoairesmatos on 6/9/17.
 */
let mongoose = require('mongoose');

module.exports = function () {
    let schema = mongoose.Schema({
        text: {
            type: String,
            required: true
        },
        likes: {
            type: number,
            required: true
        },
        shares: {
          type: number,
            required: true
        },
        user_id: {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        }
    });
    return mongoose.model('Post', schema);
}();