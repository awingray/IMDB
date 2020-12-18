var express = require("express");
var router = express.Router();
//var movie_controller = require("../../../database/controllers/movie.controller");
/*
router.get("/", movie_controller.getMovies);
router.get("/detail", movie_controller.movieDetail);
router.post("/add", movie_controller.addMovies);
 */

//TODO: add real functions.
router.get("/movie/:id", (req, res) => {res.send("Hello World")});
router.get("/statistics", (req, res) => {res.send("Hello World")});
router.put("/movie/:id", (req, res) => {res.send("Hello World")});
router.delete("/movie/:id", (req, res) => {res.send("Hello World")});

module.exports = router;