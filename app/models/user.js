/**
 * Created by gustavoairesmatos on 6/9/17.
 */

let mongoose = require('mongoose');

module.exports = function () {
    let schema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    });
    return mongoose.model('User', schema);
}();