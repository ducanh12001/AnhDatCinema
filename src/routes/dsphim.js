const express = require('express');

const router = express.Router();

const dsphimController = require('../app/Controllers/DSphimController');

router.get('/:auth' ,dsphimController.index);

module.exports = router;