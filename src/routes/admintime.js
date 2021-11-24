const express = require('express');

const router = express.Router();

const adtimeController = require('../app/Controllers/ADTimeController');

router.get('/:auth/time',adtimeController.index)
router.post('/:auth/time/delete/:id',adtimeController.deleteSuat)
router.post('/:auth/time/insert',adtimeController.insertSuat)
module.exports = router;