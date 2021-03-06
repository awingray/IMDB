// Responsible for responding to user requests
const apiResponse = require("../../core/api_response");
const successCode = require("../config/success_codes");
const errorCode = require("../config/error_codes");

// Model to use in mongoose database
const Movie = require("../models/movie.model.js");

// Formatter used to format json responses
const formatter = require("../../helpers/formatter");

// Validation used to check user input
const movieValidation = require("../validation/movie.validation.js");
const paginationValidation = require("../validation/pagination.validation.js");
const validation = require("../validation/validation_checker");

/**
 * This is a helper function.
 * It queries the Mongoose database for movies with filters:
 * @param page The page to to return (starting at page 0).
 * @param perPage The number of movies per page.
 * @param sort How the movies are sorted.
 * @param order The order in which the sorted movies are given.
 * @param title String that the movie titles should match.
 * @param actor String that the movie actors should match.
 * @param director String that the movie directors should match.
 * @param year The year of release.
 * @param genre The genre of the movies.
 * @return {Promise<*>} A promise to return all of the matching documents.
 */
async function getMovieList({page = 0, perPage = 10, sort = 'title', order = "asc", title, actor, director, year, genre}) {
    let filters = {};
    if (title) filters.title = {$regex: title};
    if (actor) filters.actors = {$regex: actor};
    if (director) filters.directors = {$regex: director};
    if (genre) filters.genre = {$regex: genre};
    if (year) filters.year = {$eq: year};
    try {
        return await Movie.find(filters).limit(Number(perPage)).skip(perPage * page).sort({[sort]: order});
    } catch (error) {
        throw errorCode.makeError('DatabaseError', 'database query failed');
    }
}

/**
 * This function queries a list of movies.
 * @param req The request.
 * @param res The response.
 * @returns {Promise<void>} A promise to send a response.
 */
exports.searchMovies = async function (req, res) {

    try {
        validation.query(req, movieValidation.filterSchema, paginationValidation.schema, movieValidation.sortSchema);
        let movies = await getMovieList(req.query);
        let result = await formatter.formatMovies(movies, req.query);
        apiResponse.sendSuccess(req, res, successCode.search, result);
        //console.log("req", req);
        //  console.log("csv", csv);
        // console.log("result ",result);
    } catch (error) {
        apiResponse.sendError(res, error);
    }
}

/**
 * This is a helper function.
 * It queries the Mongoose database for the movies with the matching id:
 * @param id The unique id of the movie.
 * @returns {Promise<*>} A promise to return all of the matching documents.
 */
async function getMovie({id}) {
    let movie = await Movie.findById(id);
    if (!movie) throw errorCode.makeError('PathError', 'movie doesn\'t exist');
    return movie;
}

/**
 * This function queries a movie using it's id.
 * @param req The request.
 * @param res The response.
 * @return {Promise<void>} A promise to send a response.
 */
exports.movieDetails = async function (req, res) {
    try {
        validation.path(req, movieValidation.idSchema);
        let movie = await getMovie(req.params);
        let result = await formatter.formatMovieDetails(movie);
        apiResponse.sendSuccess(req, res, successCode.get, result);
    } catch (error) {
        apiResponse.sendError(res, error);
    }
}

/**
 * This is a helper function.
 * It deletes the movie with the matching id from the Mongoose database.
 * @param id The unique id of the movie.
 * @returns {Promise<*>} A promise to return all of the matching documents.
 */
async function deleteMovie({id}) {
    let movie = await Movie.findByIdAndDelete(id);
    if (!movie) throw errorCode.makeError('PathError', 'movie doesn\'t exist');
    return movie;
}

/**
 * This function allows a user to remove a movie using it's id.
 * @param req The request.
 * @param res The response.
 * @return {Promise<void>} A promise to send a response.
 */
exports.removeMovie = async function (req, res) {
    try {
        validation.path(req, movieValidation.idSchema);
        let movie = await deleteMovie(req.params);
        let result = await formatter.formatMovieDetails(movie);
        apiResponse.sendSuccess(req, res, successCode.delete, result);
    } catch (error) {
        apiResponse.sendError(res, error);
    }
}

/**
 * This is a helper function.
 * It updates the movie with the matching id from the Mongoose database.
 * @param id The unique id of the movie.
 * @param update The update to perform.
 * @returns {Promise<*>} A promise to return all of the matching documents.
 */
async function updateMovie({id}, update) {
    let movie = await Movie.findByIdAndUpdate(id, update);
    if (!movie) throw errorCode.makeError('PathError', 'movie doesn\'t exist');
    return movie;
}

/**
 * This function allows a user to edit a movie.
 * @param req The request.
 * @param res The response.
 * @return {Promise<void>} A promise to send a response.
 */
exports.editMovie = async function (req, res) {
    try {
        validation.path(req, movieValidation.idSchema);
        validation.body(req, movieValidation.infoMovieSchema);
        let movie = await updateMovie(req.params, req.body);
        let result = await formatter.formatMovieDetails(movie);
        apiResponse.sendSuccess(req, res, successCode.update, result);
    } catch (error) {
        apiResponse.sendError(res, error);
    }
}

/**
 * This is a helper function.
 * It adds a new movie with given data to the Mongoose database.
 * @param data The data of the new movie.
 * @returns {Promise<*>} A promise to return all of the matching documents.
 */
async function addMovie(data) {
    try {
        let movie = new Movie(data);
        await movie.save();
        return movie;
    } catch (error) {
        throw errorCode.makeError('DatabaseError', 'database creation failed');
    }
}

/**
 * This function allows a user to create a movie.
 * @param req The request.
 * @param res The response.
 * @return {Promise<void>} A promise to send a response.
 */
exports.createMovie = async function (req, res) {
    try {
        validation.body(req, movieValidation.infoMovieSchema, movieValidation.titleMovieSchema);
        let movie = await addMovie(req.body);
        let result = await formatter.formatMovieDetails(movie);
        apiResponse.sendSuccess(req, res, successCode.create, result);
    } catch (error) {
        apiResponse.sendError(res, error);
    }
}

/**
 * This is a helper function.
 * It gets a queries the distribution of user_ratings of movies.
 * @param title String that the movie titles should match.
 * @param actor String that the movie actors should match.
 * @param director String that the movie directors should match.
 * @param year The year of release.
 * @param genre The genre of the movies.
 * @returns {Promise<*>} A promise to return the distribution as an array.
 */
async function getDistribution({title, actor, director, year, genre}) {
    let filters = {};
    if (title) filters.title = {$regex: title};
    if (actor) filters.actors = {$regex: actor};
    if (director) filters.directors = {$regex: director};
    if (genre) filters.genre = {$regex: genre};
    if (year) filters.year = {$eq: year};

    try {
        let distribution = new Array(101).fill(0);

        let ratings = await Movie.find(filters).select('users_rating');
        for (let rating of ratings) distribution[rating.users_rating*10]++;

        return distribution;
    } catch (error) {
        throw errorCode.makeError('DatabaseError', 'database query failed');
    }
}

/**
 * This function allows a user to get statistics for a list of movies.
 * @param req The request.
 * @param res The response.
 * @return {Promise<void>} A promise to send a response.
 */
exports.computeStatistics = async function(req, res){
    try {
        validation.query(req, movieValidation.filterSchema);
        let distribution = await getDistribution(req.query);
        let result = await formatter.formatStatistics(distribution, req.query);
        apiResponse.sendSuccess(req, res, successCode.computation, result);
    } catch (error) {
        apiResponse.sendError(res, error);
    }
}