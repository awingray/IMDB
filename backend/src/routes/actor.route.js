var express = require("express");
var router = express.Router();
var personController = require("../database/controllers/person.controller.js");

router.get("/", personController.searchActors);
router.get("/actor/:id", personController.actorDetails);
router.get("/actor/:id/genres", personController.actorGenres);

module.exports = router;