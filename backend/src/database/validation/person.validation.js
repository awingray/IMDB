let Joi = require("joi");

/**
 * Used to validate person name when searching for them.
 */
const filterSchema = Joi.object().keys({
    name: Joi.string()
});

/**
 * Used to validate person id.
 */
const idSchema = Joi.object().keys({
    id: Joi.string().regex(/^[0-9a-f]+$/),
});

module.exports = {
    filterSchema,
    idSchema
}