var express = require("express");
var router = express.Router();
var movie_controller = require("../database/controllers/movie.controller");

router.get("/", movie_controller.searchMovies);
router.post("/", movie_controller.createMovie);
router.get("/movie/:id", movie_controller.movieDetails);
router.get("/statistics", movie_controller.computeStatistics);
router.put("/movie/:id", movie_controller.editMovie);
router.delete("/movie/:id", movie_controller.removeMovie);

module.exports = router;