const { getEcoTurismo } = require('../../utils/manipulatingJson');

const validationName = async (req, res, next) => {
const { body: { name } } = req;
if (name === undefined) {
   return res.status(400).json({ message: 'O campo name é obrigatório' });
} 
if (name.length < 4) {
   return res.status(400).json({ message: 'O campo name deve ter pelo menos 4 caracteres' });
}
next();
};

const ifExistName = async (req, res, next) => {
    const oldEcoTurismo = await getEcoTurismo();
const { body: { name } } = req;
const checkIfExitName = oldEcoTurismo.find((ele) => ele.name === name);
if (checkIfExitName) {
    return res.status(400).json({ message: 'O campo name já existe' });
} 
next();
};

module.exports = { validationName, ifExistName };
