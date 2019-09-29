const userService = require('./users.service');

let getAllUsers = (req, res) => {
    userService.getAllUsers((err, users) => {
        if (err) {
            return res.status(500).send('something went wrong');
        }
        return res.json(users);
    })
}

let getUserById = (req, res) => {
    let userId = req.params.userId;
    userId = parseInt(userId, 10);
    userService.getUserById(userId, (err, user) => {
        if (err) {
            return res.status(500).send('something went wrong');
        }
        if (user === undefined)
            return res.status(404).send();
        return res.json(user);
    })
}

module.exports = {
    getAllUsers,
    getUserById
}