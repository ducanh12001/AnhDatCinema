const express = require('express');

const router = express.Router();

const datveController = require('../app/Controllers/DatveController');

router.get('/:auth/:phim',datveController.index)
router.post('/:auth/:phim',datveController.book)

module.exports = router;