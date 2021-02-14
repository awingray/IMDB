module.exports = {
    /**
     * This function returns an Error with the given name and message.
     * @param name The name of the Error.
     * @param message The details of the Error.
     */
    makeError : (name, message) => {
        const error = new Error();
        error.name = name;
        error.message = message;
        return error;
    },

    /**
     * Error codes for different errors that occur in the api.
     */
    "Unsupported Media Type" : 415,
    "DatabaseError" : 500,
    "BodyValidationError" : 422,
    "PathValidationError": 404,
    "PathError" : 404,
    "QueryValidationError": 400,
    "NotImplemented": 501,
    "Default" : 500,
};