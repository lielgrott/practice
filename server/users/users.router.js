const Router = require('express').Router();
const userController = require('./users.controller');


Router.get('/', userController.getAllUsers);
Router.get('/:userId', userController.getUserById);

module.exports = Router;