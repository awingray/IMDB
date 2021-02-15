// Responsible for responding to user requests
const apiResponse = require("../../core/api_response");
const successCode = require("../config/success_codes");
const errorCode = require("../config/error_codes");

// Model to use in mongoose database
const Actor = require("../models/actor.model");
const Director = require("../models/director.model");

// Formatter used to format json responses
const formatter = require("../../helpers/formatter");

// Validation used to check user input
const personValidation = require("../validation/person.validation");
const paginationValidation = require("../validation/pagination.validation.js");
const validation = require("../validation/validation_checker");

/**
 * This is a helper function.
 * It queries the Mongoose database for actors with filters:
 * @param page The page to return (starting at page 0).
 * @param perPage The number of actors per page.
 * @param sort How the actors are sorted.
 * @param order The order in which the sorted actors are given.
 * @param name String that the actor name should match.
 * @return {Promise<void>} A promise to return all of the matching documents.
 */
async function getActorList({page=0, perPage = 10, sort = 'name', order = "asc", name}){
    // TODO: This function is work in progress. See getMovieList() for similar function.
    let filters = {};
    if (name) filters.name = {$regex: name};
    try {
        return await Actor.find(filters).limit(Number(perPage)).skip(perPage * page).sort({[sort]: order});
    } catch (error){
        throw errorCode.makeError('DatabaseError', 'database query failed');
    }
}

/**
 * This function queries a list of actors
 * @param req The request.
 * @param res The response.
 * @return {Promise<void>} A promise to send a response.
 */
exports.searchActors = async function (req, res) {
    try {
        validation.query(req, personValidation.filterSchema, paginationValidation.schema);
        let actors = await getActorList(req.query);
        let result = await formatter.formatActors(actors, req.query);
        apiResponse.sendSuccess(req, res, successCode.search, result);
    } catch (error) {
        apiResponse.sendError(res, error);
    }
}

/**
 * This is a helper function.
 * It queries the Mongoose database for the actors with the matching id:
 * @param id The unique id of the actor.
 * @return {Promise<void>} A promise to return all of the matching documents.
 */
async function getActor({id}) {
    let actor = await Actor.findById(id);
    if (!actor) throw errorCode.makeError('PathError', 'actor doesn\'t exist');
    return actor;
}

/**
 * This function queries an actor using it's id.
 * @param req The request.
 * @param res The response.
 * @return {Promise<void>} A promise to send a response.
 */
exports.actorDetails = async function (req, res) {
    try {
        validation.path(req, personValidation.idSchema);
        let actor = await getActor(req.params);
        let result = await formatter.formatActorDetails(actor);
        apiResponse.sendSuccess(req, res, successCode.get, result);
    } catch (error) {
        apiResponse.sendError(res, error);
    }
}

exports.actorGenres = async function (req, res) {
    // TODO: honestly not sure how to make it needs to provide functionality 4 see M1.
    apiResponse.sendError(res, errorCode.makeError('NotImplemented', 'work in progress'));
}

/**
 * This is a helper function.
 * It queries the Mongoose database for directors with filters:
 * @param page The page to return (starting at page 0).
 * @param perPage The number of directors per page.
 * @param name String that the director name should match.
 * @param sort How the actors are sorted.
 * @param order The order in which the sorted actors are given.
 * @return {Promise<void>} A promise to return all of the matching documents.
 */
async function getDirectorList({page=0, perPage = 10, name, sort = 'name', order = 'asc'}){
    let filters = {};
    if (name) filters.name= {$regex: name};
    try{
        return await Director.find(filters).limit(Number(perPage)).skip(perPage * page).sort({[sort]: order});
    } catch (error){
        throw errorCode.makeError('DatabaseError', 'database query failed');
    }
}

/**
 * This function queries a list of directors
 * @param req The request.
 * @param res The response.
 * @return {Promise<void>} A promise to send a response.
 */
exports.searchDirectors = async function (req, res) {
    try {
        validation.query(req, personValidation.filterSchema, paginationValidation.schema);
        let directors = await getDirectorList(req.query);
        let result = await formatter.formatDirectors(directors, req.query);
        apiResponse.sendSuccess(req, res, successCode.search, result);
    } catch (error) {
        apiResponse.sendError(res, error);
    }
}

/**
 * This is a helper function.
 * It queries the Mongoose database for the directors with the matching id:
 * @param id The unique id of the director.
 * @return {Promise<void>} A promise to return all of the matching documents.
 */
async function getDirector({id}) {
    let director = await Director.findById(id);
    if (!director) throw errorCode.makeError('PathError', 'movie doesn\'t exist');
    return director;
}

/**
 * This function queries a director using it's id.
 * @param req The request.
 * @param res The response.
 * @return {Promise<void>} A promise to send a response.
 */
exports.directorDetails = async function (req, res) {
    try {
        validation.path(req, personValidation.idSchema);
        let director = await getDirector(req.params);
        let result = await formatter.formatDirectorDetails(director);
        apiResponse.sendSuccess(req, res, successCode.get, result);
    } catch (error) {
        apiResponse.sendError(res, error);
    }
}

exports.directorGenres = async function (req, res) {
    // TODO: honestly not sure how to make it needs to provide functionality 4 see M1.
    apiResponse.sendError(res, errorCode.makeError('NotImplemented', 'work in progress'));
}