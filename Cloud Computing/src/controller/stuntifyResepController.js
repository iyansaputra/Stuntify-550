const resepModels = require('../models/stuntifyResepModels');

const getAllResep = async (req, res) => {
    try {
        const [data] = await resepModels.getAllResep();
        
        res.json({
            message: 'GET All Resep Makanan Success',
            data: data
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error getting all recipes',
            serverMessage: error
        });
    }
}

const getCariResep = async (req, res) => {
    const { bahan_makanan1, bahan_makanan2, bahan_makanan3, bahan_makanan4, bahan_makanan5 } = req.params;
    const bahanMakananArray = [bahan_makanan1, bahan_makanan2, bahan_makanan3, bahan_makanan4, bahan_makanan5];

    try {
        const filteredBahanMakananArray = bahanMakananArray.filter(Boolean);

        console.log('Parameters:', filteredBahanMakananArray);
        const [results] = await resepModels.getCariResep(filteredBahanMakananArray);

        res.json({
            message: 'GET All Resep Makanan Success',
            data: results
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error getting all recipes',
            serverMessage: error
        });
    }
}

module.exports = {
    getAllResep,
    getCariResep
}
