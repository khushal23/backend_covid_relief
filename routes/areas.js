const express = require('express');
const router = express.Router();
const areaController = require('../controllers/areas');

router.get('/countries', areaController.getCountriesList)
router.get('/states', areaController.getStatesList)
router.get('/cities', areaController.getCitiesList)

module.exports = router;