const dbPool = require('../config/database');

const getAllResep = () => {
    const SQLQuery = 'SELECT * FROM ResepMakanan';
    return dbPool.execute(SQLQuery);
}

const getCariResep = (bahan_makanan_array) => {
    const placeholders = bahan_makanan_array.map(() => 'bahan_makanan LIKE ?').join(' AND ');
    const SQLQuery = `SELECT * FROM ResepMakanan WHERE ${placeholders}`;
    const queryArgs = bahan_makanan_array.map(bahan => `%${bahan}%`);

    return dbPool.execute(SQLQuery, queryArgs);
}

module.exports = {
    getAllResep,
    getCariResep
}
