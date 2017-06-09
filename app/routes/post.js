/**
 * Created by gustavoairesmatos on 6/9/17.
 */

let controller = require('../controllers/post');

module.exports = function (app) {
    app.get('/api/posts', controller.getPosts);
    app.get('/api/posts/:id', controller.getPost);
    app.post('/api/posts', controller.postPost);
}