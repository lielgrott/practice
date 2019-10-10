const Router = require('express').Router();
const userController = require('./users.controller');


Router.get('/', userController.getAllUsers);
Router.get('/:userId', userController.getUserById);
Router.post('/', userController.createUser);

module.exports = Router;