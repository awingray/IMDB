const Joi = require('joi');

// used to throw errors when validation checks fail
const errorCode = require('../config/error_codes')

/**
 * Generalized helper function used for validation.
 * @param userInput The input given by the user.
 * @param errorName The name of the error that should be thrown.
 * @param schemas The schemas used to validate the input.
 */
function check(userInput, errorName, ...schemas) {
    let concatSchemas = schemas.reduce((a, b) => a.concat(b), Joi.object().keys({}));
    let {error} = concatSchemas.validate(userInput);
    if (error) throw errorCode.makeError(errorName, error.details[0].message);
}

/**
 * This function validates a request body.
 * @param req The request itself.
 * @param schemas The schemas to check with.
 * @throws Error if body isn't validated.
 */
function body(req, ...schemas) {
    const errorName = 'BodyValidationError';
    check(req.body, errorName, ...schemas);
}

/**
 * This function validates a request query.
 * @param req The request itself.
 * @param schemas The schemas to check with.
 * @throws Error if query isn't validated.
 */
function query(req, ...schemas) {
    const errorName = 'QueryValidationError';
    check(req.query, errorName, ...schemas);
}

/**
 * This function validates a request path.
 * @param req The request itself.
 * @param schemas The schemas to check with.
 * @throws Error if path isn't validated.
 */
function path(req, ...schemas) {
    const errorName = 'PathValidationError';
    check(req.params, errorName, ...schemas);
}

module.exports = {
    body,
    query,
    path
}
