const express = require('express');
const router = express.Router();
const eventRoutes = require('./events')
const areaRoutes = require('./areas');

router.use('/events', eventRoutes);
router.use('/', areaRoutes);

module.exports = router;