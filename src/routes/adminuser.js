const express = require('express');

const router = express.Router();

const adusers = require('../app/Controllers/ADusers');

router.get('/:auth/users',adusers.index)

module.exports = router;