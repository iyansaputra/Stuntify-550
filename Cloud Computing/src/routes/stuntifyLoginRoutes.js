const express = require('express');

const LoginController = require('../controller/stuntifyLoginController');

const routes = express.Router();

routes.post('/', LoginController.createUserLogin);

routes.get('/', LoginController.getAllUsersLogin);

routes.patch('/:idUser', LoginController.updateUserLogin);

routes.delete('/:idUser', LoginController.deleteUserLogin);

module.exports = routes;