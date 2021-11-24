const express = require('express');

const router = express.Router();

const adminController = require('../app/Controllers/AdminController');

router.get('/:auth',adminController.index)

module.exports = router;