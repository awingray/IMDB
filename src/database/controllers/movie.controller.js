var apiResponse = require("../../core/api_response");
var movieJsonData = require("../../core/movie.json");
var successCode = require("../config/success_codes");
var errorCode = require("../config/error_codes");
var Movie = require("../models/movie.model.js");
var TestMovie = require("../models/test_movie.model.js");
var format = require("../../helpers/helper");

exports.getMovies = async function (req, res) {
  var message = errorCode.invalid_data.message;
  var status_code = 0;
  var data = [];
  try {
   
    let movies = await TestMovie.find().limit(300);

    if(movies.length == 0){
      message = errorCode.no_data.message;
      status_code = 0;

      return;
    }

    for (movieData of movies) {
      let movieDetail = await format.formatMovie(movieData);
      data.push(movieDetail);
    }

    message = successCode.list.message;
    status_code = 1;
  } catch (err) {
    // Catch all exceptions
    console.log("Error", err);
    if (err.kind == "ObjectId") {
      message = errorCode.id_mismatch.message;
    } else {
      message = err.message;
    }
  } finally {
    // Return the response to the user
    res.send(apiResponse.makeResponse(data, message, status_code));
  }
};


exports.movieDetail = async function (req, res) {
  var { imdb_url } = req.query;
  var message = errorCode.invalid_data.message;
  var status_code = 0;
  var data = {};
  try {
   
    let movie = await Movie.findOne({
      imdb_url
    });

    if(!movie){
      message = errorCode.no_data.message;
      status_code = 0;

      return;
    }

    data = await format.formatMovie(movie);

    message = successCode.detail.message;
    status_code = 1;
  } catch (err) {
    // Catch all exceptions
    console.log("Error", err);
    if (err.kind == "ObjectId") {
      message = errorCode.id_mismatch.message;
    } else {
      message = err.message;
    }
  } finally {
    // Return the response to the user
    res.send(apiResponse.makeResponse(data, message, status_code));
  }
};


exports.addMovies = async function (req, res) {
  var message = errorCode.invalid_data.message;
  var status_code = 0;
  var data = [];
  try {
   
    let movies = movieJsonData;

    if(movies.length == 0){
      message = errorCode.no_data.message;
      status_code = 0;

      return;
    }

    for (movieData of movies) {
      let movieDetail = await TestMovie.create(movieData);
      movieDetail.save();
    }

    message = successCode.list.message;
    status_code = 1;
  } catch (err) {
    // Catch all exceptions
    console.log("Error", err);
    if (err.kind == "ObjectId") {
      message = errorCode.id_mismatch.message;
    } else {
      message = err.message;
    }
  } finally {
    // Return the response to the user
    res.send(apiResponse.makeResponse(data, message, status_code));
  }
};
