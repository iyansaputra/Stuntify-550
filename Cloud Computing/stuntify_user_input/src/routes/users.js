const express = require('express');

const UsersController = require('../controller/users.js');

const routes = express.Router();

// CREATE - POST 
routes.post('/', UsersController.createNewUsers);

// READ -GET
routes.get('/', UsersController.getAllUsers);

// UPDATE - PATCH
routes.patch('/:idUsers', UsersController.updateUsers);

// DELETE - DELETE
routes.delete('/:idUsers', UsersController.deleteUsers);

module.exports = routes;