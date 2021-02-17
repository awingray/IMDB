const express = require("express");
const router = express.Router();
const personController = require("../database/controllers/person.controller.js");

/**
 * Routes for actor endpoints in the api.
 */
router.get("/", personController.searchActors);
router.get("/:id", personController.actorDetails);
router.get("/:id/genres", personController.actorGenres);

module.exports = router;