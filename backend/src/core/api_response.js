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
    switch (error.name) {  // TODO save error codes in error_codes.json
        case 'DatabaseError':
            return res.status(500).send({status: 0, message:error.message});
        case 'BodyValidationError':
            return res.status(422).send({status: 0, message:error.message});
        case 'PathValidationError':
            return res.status(404).send({status: 0, message:error.message});
        case 'PathError':
            return res.status(404).send({status: 0, message:error.message});
        case 'QueryValidationError':
            return res.status(400).send({status: 0, message:error.message});
        default:
            return res.status(501).send({status: 0, message:'Unexpected Error Occurred'});
    }
}

module.exports = {
    sendError,
    sendSuccess,
};
