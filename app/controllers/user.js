/**
 * Created by gustavoairesmatos on 6/9/17.
 */
let User = require('../models/user');

module.exports.getUsers = function (req, res) {
    let promise = User.find().exec();

    promise.then(
        function (success) {
            if (success) {
                res.status(200).json(success);
            } else {
                res.status(404).send('No user available');
            }
        },
        function (err) {
            res.status(500).json(err);
        }
    );
}

module.exports.getUser = function (req, res) {
    let id = req.params.id;

    let promise = User.findById(id).exec();

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
    )
}

module.exports.postUser = function (req, res) {
    let user = new User({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password
    });

    let promise = User.create(user);

    promise.then(
        function (success) {
            res.status(201).json(success);
        },
        function (err) {
            res.status(500).json(err);
        }
    )
}