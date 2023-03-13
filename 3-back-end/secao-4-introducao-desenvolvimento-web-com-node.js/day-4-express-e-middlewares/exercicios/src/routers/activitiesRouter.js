const express = require('express');
const { postEcoTurismo } = require('../../utils/manipulatingJson');
const { validationName, ifExistName, validationPrice } = require('../middlewares');

const router = express.Router();

router.post('/activities', validationName, ifExistName, validationPrice, (req, res) => {
    const { body } = req;
    const newEcoTurismo = postEcoTurismo(body);
    return res.status(201).json(newEcoTurismo);
});

module.exports = router;