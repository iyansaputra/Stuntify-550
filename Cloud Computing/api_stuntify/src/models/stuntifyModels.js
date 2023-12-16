const dbPool = require('../config/database');

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM data_user';
  return dbPool.execute(SQLQuery);
};

const createNewUsers = (body) => {
  const SQLQuery = `
  INSERT INTO data_user (berat_awal, tinggi_awal, berat, tinggi, umur, jenis_kelamin) 
  VALUES (?, ?, ?, ?, ?, ?)`;

return dbPool.execute(SQLQuery, [body.berat_awal, body.tinggi_awal, body.berat, body.tinggi, body.umur, body.jenis_kelamin]);
};

const updateUsers = (body, idUser) => {
  const SQLQuery = `
      UPDATE data_user
      SET berat_awal=?, tinggi_awal=?, berat=?, tinggi=?, umur=?, jenis_kelamin=?
      WHERE id=?`;

    return dbPool.execute(SQLQuery, [body.berat_awal, body.tinggi_awal, body.berat, body.tinggi, body.umur, body.jenis_kelamin, idUser]);
};

const deleteUsers = async (idUsers) => {
  const SQLQuery = `DELETE FROM data_user WHERE id=?`;
  return dbPool.execute(SQLQuery, [idUsers]);
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUsers,
  deleteUsers
};
