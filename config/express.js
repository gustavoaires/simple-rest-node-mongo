/**
 * Created by gustavoairesmatos on 6/9/17.
 */

let express = require('express');
let userRoutes = require('../app/routes/user');
let postRoutes = require('../app/routes/post');
let bodyParser = require('body-parser');

module.exports = function () {
    let app = express();
    app.set('port', 3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    userRoutes(app);
    postRoutes(app);

    return app;
}