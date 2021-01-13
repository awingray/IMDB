function makeResponse(data, message, status_code) {
    var response = data;
    response = {
        status: status_code,
        message: message,
        data: data ? data : [],
    };

    return response;
}

/**
 * This function sends a response to the user in case of success.
 * @param res The response to the user.
 * @param message The message to send to the user.
 * @param code The response code to send to the user.
 * @param data The data to return to the user.
 */
function sendSuccess(res, message, code, data) {
    return res.status(code).send({  // TODO save success codes in success_codes.json
        status: 1,
        message: message,
        data: data ? data : []
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
    makeResponse,
    sendError,
    sendSuccess,
};
