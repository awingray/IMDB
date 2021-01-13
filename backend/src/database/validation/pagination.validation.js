let Joi = require('joi')

/**
 * Used to validate pagination.
 */
const schema = Joi.object().keys({
    page: Joi.number().min(0),
    perPage: Joi.number().min(0)
});


module.exports = {
    schema,
};