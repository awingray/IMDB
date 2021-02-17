let Joi = require("joi");

/**
 * Used to validate a movie title.
 */
let titleMovieSchema = Joi.object().keys({
    title: Joi.string().trim().min(1).required(),
});

/**
 * Used to validate a movie update.
 */
let infoMovieSchema = Joi.object().keys({
    title: Joi.string().trim().min(1),
    rating: Joi.string(),
    year: Joi.number().min(1900).max(2021).integer(),
    user_rating: Joi.number().min(1).max(10),
    votes: Joi.number().min(0).integer(),
    metascore: Joi.number().min(0).max(100).integer(),
    img_url: Joi.string(),
    countries: Joi.array().items(Joi.string()).min(1),
    languages: Joi.array().items(Joi.string()).min(1),
    actors: Joi.array().items(Joi.string()).min(1),
    genre: Joi.array().items(Joi.string()).min(1),
    tagline: Joi.string(),
    description: Joi.string(),
    directors: Joi.array().items(Joi.string()).min(1),
    runtime: Joi.string().regex(/^\d+ min$/),
    imdb_url: Joi.string(),
}).invalid({});

/**
 * Used to validate movie search filters.
 */
const filterSchema = Joi.object().keys({
    year: Joi.number(),
    title: Joi.string(),
    actor: Joi.string(),
    director: Joi.string(),
    genre: Joi.string(),
    file_type: Joi.string(),
});

/**
 * Used to sort movies.
 */
const sortSchema = Joi.object().keys({
    sort: Joi.string().valid('title', 'year', 'users_rating'),
    order: Joi.string().valid('asc', 'desc', 'ascending', 'descending', '1', '-1')
});

/**
 * Used to validate movie id.
 */
const idSchema = Joi.object().keys({
   id: Joi.string().regex(/^[0-9a-f]+$/),
});


module.exports = {
    titleMovieSchema,
    infoMovieSchema,
    filterSchema,
    sortSchema,
    idSchema
};