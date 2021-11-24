const express = require('express');

const router = express.Router();

const trangchuController = require('../app/Controllers/TrangchuController.js');
const phim = require('../models/phim');

router.get('/:auth',trangchuController.index);


module.exports = router;
