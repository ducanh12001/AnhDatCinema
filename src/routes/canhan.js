const express = require('express');

const router = express.Router();

const canhanController = require('../app/Controllers/CanhanController');

router.get('/:auth',canhanController.index)

module.exports = router;