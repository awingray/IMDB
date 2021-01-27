const express = require("express");
const router = express.Router();
const personController = require("../database/controllers/person.controller.js");

/**
 * Routes for directors endpoints of the api.
 */
router.get("/", personController.searchDirectors);
router.get("/:id", personController.directorDetails);
router.get("/:id/genres", personController.directorGenres);

module.exports = router;