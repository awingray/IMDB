const errorCode = require('../database/config/error_codes');

/**
 * This function sends a response to the user in case of success.
 * @param res The response to the user.
 * @param status The response code to send to the user.
 * @param message The message to send to the user.
 * @param result The data to return to the user.
 */
function sendSuccess(res, {status, message}, result) {
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
