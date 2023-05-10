const express = require('express');

const predictionController = require('../controllers/predictionController');

const router = express.Router();

router.post('/', (request, response, next) => {
    console.log("Route to prediction", request.body);
    
    predictionController.predict(request, response);
});

module.exports = router;