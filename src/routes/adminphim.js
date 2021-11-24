const express = require('express');

const router = express.Router();

const adphimController = require('../app/Controllers/ADPhimController');

router.get('/:auth/phim',adphimController.index)
router.post('/:auth/phim/delete/:id',adphimController.deletephim)
router.post('/:auth/phim/insert',adphimController.insertphim)
module.exports = router;