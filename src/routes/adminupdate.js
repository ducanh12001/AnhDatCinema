const express = require('express');

const router = express.Router();

const adupdate = require('../app/Controllers/ADupdate');

router.get('/:auth/update',adupdate.index)
router.post('/:auth/update',adupdate.change)
module.exports = router;