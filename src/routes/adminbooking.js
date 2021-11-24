const express = require('express');

const router = express.Router();

const ADbooking = require('../app/Controllers/ADbooking');

router.get('/:auth/booking',ADbooking.index)

module.exports = router;