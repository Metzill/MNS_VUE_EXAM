require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');


const user = process.env.MONGO_USERS;
const pass = process.env.MONGO_PASS;
const cluster = process.env.MONGO_URL;
const db = process.env.MONGO_DB_NAME;

mongoose.connect(
    "mongodb://" + cluster + "/" + db,
    {
        pass: pass,
        user: user,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((e) => console.log(e, 'Connexion à MongoDB échouée!'));

const todosRoutes = require('./routes/todos');
const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:8080'
}));

app.use('/ping', (req, res) => {
    res.status(200).send("PING OK");
});

app.use('/api/v1/todos', todosRoutes);

module.exports = app;