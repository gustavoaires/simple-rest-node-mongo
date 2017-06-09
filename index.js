/**
 * Created by gustavoairesmatos on 6/9/17.
 */

let http = require('http');
let db = require('./config/database');
let app = require('./config/express')();

http.createServer(app).listen(app.get('port'), function () {
    console.log('running, port: ' + app.get('port'));
});

db('mongodb://localhost/simple-test');