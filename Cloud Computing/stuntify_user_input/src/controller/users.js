const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
    const [data] = await UsersModel.getAllUsers();

    res.json ({
        messege: 'GET all users success',
        data: data
    })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessege: error,
        })
    }
    
}

const createNewUsers = async (req, res) => {
    const {body} = req;
    try {
        await UsersModel.createNewUsers(body);
        res.status(201).json({
            messege: 'CREATE all users suuccess',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessege: error,
        })
    }
}

const updateUsers = async (req, res) => {
    const {idUsers} = req.params;
    const {body} = req;
    try {
        await UsersModel.updateUsers(body, idUsers);
        res.json({
            message: 'UPDATE users success',
            data: {
                id: idUsers,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessege: error,
        })
    }
}

const deleteUsers = async (req, res) => {
    const {idUsers} = req.params;
    try {
        await UsersModel.deleteUsers(idUsers);
        res.status(201).json({
            message: 'DELETE users success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessege: error,
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUsers
}