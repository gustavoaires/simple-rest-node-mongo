/**
 * Created by gustavoairesmatos on 6/9/17.
 */

let controller = require('../controllers/user');

module.exports = function (app) {
    app.get('/api/users', controller.getUsers);
    app.get('/api/users/:id', controller.getUser);
    app.post('/api/users', controller.postUser);
}