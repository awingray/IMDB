var express = require("express");
var router = express.Router();
var movie_controller = require("../../../database/controllers/movie.controller");

router.get("/", movie_controller.getMovies);
router.get("/detail", movie_controller.movieDetail);
router.post("/add", movie_controller.addMovies);

module.exports = router;