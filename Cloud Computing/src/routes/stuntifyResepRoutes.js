const express = require('express');
const routerResep = express.Router();
const resepController = require('../controller/stuntifyResepController');

routerResep.get('/', resepController.getAllResep);

routerResep.get('/search/:bahan_makanan1', resepController.getCariResep);
routerResep.get('/search/:bahan_makanan1/:bahan_makanan2', resepController.getCariResep);
routerResep.get('/search/:bahan_makanan1/:bahan_makanan2/:bahan_makanan3', resepController.getCariResep);
routerResep.get('/search/:bahan_makanan1/:bahan_makanan2/:bahan_makanan3/:bahan_makanan4', resepController.getCariResep);
routerResep.get('/search/:bahan_makanan1/:bahan_makanan2/:bahan_makanan3/:bahan_makanan4/:bahan_makanan5', resepController.getCariResep);

module.exports = routerResep;
