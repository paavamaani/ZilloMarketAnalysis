const predict = require('../DatabaseModels/prediction');

/**
 * 
 * @param {Object} request 
 * @param {Object} response
 * 
 * Predict Log Error Value 
 */
exports.predict = (request, response) => {
    console.log("Success predicting in predict");
        
    response.status(200).json(request.body);
};