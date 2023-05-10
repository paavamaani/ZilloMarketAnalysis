const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const predictionRoute = require('./api/routes/prediction');

const app = express();

// mongoose.connect(``);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', '*');

    if(request.method === 'OPTIONS') {
        request.header('Access-Control-Allow-Methods', '*');
        return response.status(200).json({});
    }

    next();
});

app.use('/prediction', predictionRoute);

app.use((request, response, next) => {
    const error = new Error('Not found API');
    error.status = 404;
    next(error);
});

app.use((error, request, response, next) => {
    response.status(error.status || 500).json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;