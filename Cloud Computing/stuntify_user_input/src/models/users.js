const dbPool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM data_input';

    return dbPool.execute(SQLQuery);
}

const createNewUsers = (body) => {
    const SQLQuery = `  INSERT INTO data_input (berat, tinggi, umur, jenis_kelamin) 
                        VALUES ('${body.berat}', '${body.tinggi}', '${body.umur}', '${body.jenis_kelamin}')`;
    
    return dbPool.execute(SQLQuery);
}

const updateUsers = (body, idUser) => {
    const SQLQuery = `  UPDATE data_input
                        SET berat='${body.berat}', tinggi='${body.tinggi}', umur='${body.umur}', jenis_kelamin='${body.jenis_kelamin}'
                        WHERE id=${idUser}`

    return dbPool.execute(SQLQuery);
}

const deleteUsers = (idUser) => {
    const SQLQuery = `DELETE FROM data_input WHERE id=${idUser}`

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUsers
}