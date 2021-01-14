const express = require("express");
const router = express.Router();
const personController = require("../database/controllers/person.controller.js");

/**
 * Routes for actor endpoints in the api.
 */
router.get("/", personController.searchActors);
router.get("/actor/:id", personController.actorDetails);
router.get("/actor/:id/genres", personController.actorGenres);

module.exports = router;