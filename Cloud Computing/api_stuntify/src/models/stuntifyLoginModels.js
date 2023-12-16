const dbPool = require('../config/database');

const getAllUsersLogin = () => {
    const SQLQuery = 'SELECT * FROM stuntify.users';
    return dbPool.execute(SQLQuery);
}

const createUserLogin = (body) => {
    const SQLQuery = `
        INSERT INTO users (name, email, asal_kota, umur) VALUES (?, ?, ?, ?)`;
        
    return dbPool.execute(SQLQuery, [body.name, body.email, body.asal_kota, body.umur]);
}

const updateUserLogin = (body, idUser) => {
    const SQLQuery = `
        UPDATE users
        SET name = ?, email = ?, asal_kota = ?, umur = ?
        WHERE id = ?`;

    return dbPool.query(SQLQuery, [body.name, body.email, body.asal_kota, body.umur, idUser]);
}

const deleteUserLogin = (idUser) => {
    const SQLQuery = `DELETE FROM users WHERE id = ?`;
    return dbPool.query(SQLQuery, [idUser]);
}

module.exports = {
    getAllUsersLogin,
    createUserLogin,
    updateUserLogin,
    deleteUserLogin
}