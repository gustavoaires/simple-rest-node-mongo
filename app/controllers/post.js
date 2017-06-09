/**
 * Created by gustavoairesmatos on 6/9/17.
 */
let Post = require('../models/post');

module.exports.getPosts = function (req, res) {
    let promise = Post.find().exec();

    promise.then(
        function (success) {
            if (success) {
                res.status(200).json(success);
            } else {
                res.status(404).send('No post available');
            }
        },
        function (err) {
            res.status(500).json(err);
        }
    );
}

module.exports.getPost = function (req, res) {
    let id = req.params.id;

    let promise = Post.findById(id).exec();

    promise.then(
        function (success) {
            if (success) {
                res.status(200).json(success);
            } else {
                res.status(404).send('Post not found');
            }
        },
        function (err) {
            res.status(500).json(err);
        }
    );
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