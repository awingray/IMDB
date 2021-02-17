const errorCode = require('../database/config/error_codes');

const csvConverter = require("../helpers/converter");

/**
 * This function sends a response to the user in case of success.
 * @param res The response to the user.
 * @param status The response code to send to the user.
 * @param message The message to send to the user.
 * @param result The data to return to the user.
 */
function sendSuccess(req, res, {status, message}, result) {
    // if no type file or JSON is requested, JSON is used
    if(!req.header("accept") || req.header("accept") === "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8" || req.header("accept") === "application/json"){
    } else if (req.header("accept") === "text/csv"){
        let csv = csvConverter.convert2Csv(result); // Result is converted to JSON
        result = csv;
        res.set("Content-Type", "text/csv");
    } else {
        res.status(415);
        throw errorCode.makeError("Unsupported Media Type", "Media type is not supported"); 
    }
    return res.status(status).send({
        status: 1,
        message: message,
        data: result ? result : []
    });
}

/**
 * This function sends a response to the users when an error occurs.
 * @param res The response to the user.
 * @param error The error that has occurred.
 */
function sendError(res, error) {
    console.log(error);
    if (errorCode[error.name]) return res.status(errorCode[error.name]).send({
        status: 0,
        message:error.message
    });
    return res.status(errorCode['Default']).send({
        status: 0,
        message: 'Unexpected Error Occurred'
    });
}

module.exports = {
    sendError,
    sendSuccess,
};
