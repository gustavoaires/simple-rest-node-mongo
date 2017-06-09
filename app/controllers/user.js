/**
 * Created by gustavoairesmatos on 6/9/17.
 */
let User = require('../models/user');

module.exports.getUsers = function (req, res) {
    
}

module.exports.getUser = function (req, res) {
    
}

module.exports.postUser = function (req, res) {
    let user = new User({
        name: req.body.name,
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