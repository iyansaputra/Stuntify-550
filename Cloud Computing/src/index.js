require('dotenv').config();
const PORT = process.env.PORT || 4000;
const express = require('express');
const cors = require('cors');

const loginRoutes = require('./routes/stuntifyLoginRoutes.js')
const usersRoutes = require('./routes/stuntifyRoutes.js');
const resepRoutes = require('./routes/stuntifyResepRoutes.js');

const middlewareLogRequest = require('./middleware/logs.js');

const app = express();

app.use(express.json());
app.use(cors()); 
app.use(middlewareLogRequest);

app.use('/users', loginRoutes);
app.use('/users/stuntify', usersRoutes);
app.use('/users/stuntify/resep', resepRoutes);

app.listen(PORT, () => {
    console.log(`Server Running in port: ${PORT}`);
});
