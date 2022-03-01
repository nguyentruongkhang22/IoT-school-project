const express = require('express');
const morgan = require('morgan');
const router = require('./routes/routes');
const url = 'http://localhost:3000/';
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARES
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(morgan('dev'));

// ROUTES
app.use('/', router);
app.use('/api/v1', router);
// SERVER
app.listen(PORT || 3000, () => {
    console.log(`Server is running on ${url}`);
});
