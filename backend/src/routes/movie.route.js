const express = require("express");
const router = express.Router();
const movie_controller = require("../database/controllers/movie.controller");

/**
 * Routes for movie endpoints of the api.
 */
router.get("/", movie_controller.searchMovies);
router.post("/", movie_controller.createMovie);
router.get("/statistics", movie_controller.computeStatistics);
router.get("/:id", movie_controller.movieDetails);
router.put("/:id", movie_controller.editMovie);
router.delete("/:id", movie_controller.removeMovie);

module.exports = router;