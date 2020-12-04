const express = require('express');
const router = express.Router();

const { getMovie, getMovieTitle, addMovie, updateMovie, deleteMovie } = require('../controllers/movie');

router.route('/')
    .get(getMovie)
    .post(addMovie)
    .delete(deleteMovie)
    .put(updateMovie)

router.route('/:text')
    .get(getMovieTitle)

module.exports = router;