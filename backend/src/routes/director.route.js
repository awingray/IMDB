var express = require("express");
var router = express.Router();
var personController = require("../database/controllers/person.controller.js");

router.get("/", personController.searchDirectors);
router.get("/director/:id", personController.directorDetails);
router.get("/director/:id/genres", personController.directorGenres);

module.exports = router;