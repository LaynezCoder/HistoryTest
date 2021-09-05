const { Router } = require('express');

const { create } = require('../controllers/user.controller');

const router = Router();

router.put('/create', create);

module.exports = router;