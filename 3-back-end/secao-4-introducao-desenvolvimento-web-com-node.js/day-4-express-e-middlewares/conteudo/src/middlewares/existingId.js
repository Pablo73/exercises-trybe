const teams = require('../app');

const existingId = (req, res, next) => {
    const { id } = req.params;
    if (teams.some((ele) => +ele.id === +id)) {
        return next();
    } 
    res.status(404).send({ message: 'Time não encontrado' });
    };

    module.exports = existingId;