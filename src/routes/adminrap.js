const express = require('express');

const router = express.Router();

const adrapController = require('../app/Controllers/ADRapController');

router.get('/:auth/rap',adrapController.index)
router.post('/:auth/rap/delete/:id',adrapController.deleteRap)
router.post('/:auth/rap/insert',adrapController.insertRap)
module.exports = router;