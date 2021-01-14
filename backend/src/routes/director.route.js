const express = require("express");
const router = express.Router();
const personController = require("../database/controllers/person.controller.js");

/**
 * Routes for directors endpoints of the api.
 */
router.get("/", personController.searchDirectors);
router.get("/director/:id", personController.directorDetails);
router.get("/director/:id/genres", personController.directorGenres);

module.exports = router;