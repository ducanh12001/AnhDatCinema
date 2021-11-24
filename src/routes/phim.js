const express = require('express');

const router = express.Router();

const phimController = require('../app/Controllers/PhimController');
const phim = require('../models/phim');

router.get('/:auth/:namephim',phimController.index);

module.exports = router;