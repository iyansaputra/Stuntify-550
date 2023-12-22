const LoginModel = require('../models/stuntifyLoginModels');

const getAllUsersLogin = async (req, res) => {
    try {
        const [data] = await LoginModel.getAllUsersLogin();

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
}

const createUserLogin = async (req, res) => {
    const { body } = req;
    try {
        console.log('Received data:', body);
        await LoginModel.createUserLogin(body);
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
}

const updateUserLogin = async (req, res) => {
    const { idUser } = req.params;
    const { body } = req;
    try {
        await LoginModel.updateUserLogin(body, idUser);
        res.json({
            message: 'UPDATE users success',
            data: {
                id: idUser,
                ...body
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

const deleteUserLogin = async (req, res) => {
    const { idUser } = req.params;
    try {
        await LoginModel.deleteUserLogin(idUser);
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
}

module.exports = {
    getAllUsersLogin,
    createUserLogin,
    updateUserLogin,
    deleteUserLogin
}
