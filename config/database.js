/**
 * Created by gustavoairesmatos on 6/9/17.
 */
let mongoose = require('mongoose');

module.exports = function (uri) {
    mongoose.connect(uri);
    mongoose.connection.on('connected', function () {
        console.log('connected to ' + uri);
    });
    mongoose.connection.on('disconnected', function () {
        console.log('cant connect to ' + uri);
    });
    mongoose.connection.on('error', function (error) {
        console.log('something wrong happened: ' + error);
    });
    mongoose.set('debug', true);
}