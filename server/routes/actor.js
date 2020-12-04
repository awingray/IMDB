const express = require('express');
const router = express.Router();

const {
    getActor,
    addActor
} = require('../controllers/actor');

router.route('/')
    .get(getActor)
    .post(addActor)

module.exports = router;