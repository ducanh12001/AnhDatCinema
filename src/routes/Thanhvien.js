const express = require('express');

const router = express.Router();

const thanhvienController = require('../app/Controllers/ThanhvienController.js')

router.get('/:auth',thanhvienController.index);
router.post('/:auth',thanhvienController.change);

module.exports = router;