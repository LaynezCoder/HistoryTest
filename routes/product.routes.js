const { Router } = require('express');

const { create, update } = require('../controllers/product.controller');

const { User } = require('../models');

const router = Router();

router.put('/create/:updatedBy', async(req, res, next) => {
    const { updatedBy } = req.params;
    const user = await User.findById(updatedBy, { __v: false });

    if (!user) {
        req.user = user;
        return next();
    }

    res.satatus(404).send({ message: 'Usuario no existente' });
}, create);

router.post('/update/:id/:updatedBy', update);

module.exports = router;