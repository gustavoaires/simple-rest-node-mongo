/**
 * Created by gustavoairesmatos on 6/9/17.
 */
let Post = require('../models/post');

module.exports.getPosts = function (req, res) {
    
}

module.exports.getPost = function (req, res) {
    
}

module.exports.postPost = function (req, res) {
    let post = new Post({
        text: req.body.text,
        likes: req.body.likes,
        shares: req.body.shares,
        user_id: req.body.user_id
    });

    let promise = Post.create(post);

    promise.then(
        function (success) {
            res.status(201).json(success);
        },
        function (err) {
            res.status(500).json(err);
        }
    );
}