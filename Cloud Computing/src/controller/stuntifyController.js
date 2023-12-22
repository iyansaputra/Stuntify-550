const UsersModel = require('../models/stuntifyModels');

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();

    res.json({
      message: 'GET all users success',
      data: data
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const createNewUsers = async (req, res) => {
  const { body } = req;
  try {
    await UsersModel.createNewUsers(body);
    res.status(201).json({
      message: 'CREATE all users success',
      data: body
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const updateUsers = async (req, res) => {
  const { idUsers } = req.params;
  const { body } = req;
  try {
    await UsersModel.updateUsers(body, idUsers);
    res.json({
      message: 'UPDATE users success',
      data: {
        id: idUsers,
        ...body
      }
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const deleteUsers = async (req, res) => {
  const { idUsers } = req.params;
  try {
    await UsersModel.deleteUsers(idUsers);
    res.status(201).json({
      message: 'DELETE users success',
      data: null
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUsers,
  deleteUsers
};