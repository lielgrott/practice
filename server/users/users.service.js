const fse = require('fs-extra');
const path = require('path');
const USER_FILE_LOCATION = path.join(__dirname, '../data/users.json');

let getAllUsers = (cb) => {
    fse.readJSON(USER_FILE_LOCATION, (err, users) => {
        if (err) {
            console.log(err);
            return cb(err);
        }
        cb(null, users);
    });
};

let getUserById = (userId, cb) => {
    fse.readJSON(USER_FILE_LOCATION, (err, users) => {
        if (err) {
            console.log(err);
            return cb(err);
        }
        let user = users.find((u) => {
            return u.id === userId;
        });
        cb(null, user);
    });
}

let createUser = (user, cb) => {
    fse.writeJSON(USER_FILE_LOCATION, user, (err, user) => {
        if (err) {
            console.log(err);
            return cb(err);
        }
        cb(null, user);
    })
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser
};