const express = require('express');

const router = express.Router();

const activitesRouter = require('./activitiesRouter');

router.use(activitesRouter);

module.exports = router;