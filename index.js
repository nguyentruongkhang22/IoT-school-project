const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config({ path: './config.env' });

const router = require('./routes/routes');
const { json } = require('express');
const url = 'http://localhost:3000/';
const PORT = process.env.PORT;
const app = express();
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
// MIDDLEWARES

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
mongoose
    .connect(DB, {
        useNewUrlParser: true,
    })
    .then(() => console.log('Database connected !!!'))
    .catch((e) => console.log(e));
// ROUTES
app.use('/', router);
// SERVER
app.listen(PORT || 3000, () => {
    console.log(`Server is running on ${url}`);
});
