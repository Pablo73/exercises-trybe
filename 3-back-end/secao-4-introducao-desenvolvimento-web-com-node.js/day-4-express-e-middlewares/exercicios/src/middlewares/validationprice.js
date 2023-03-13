const validationPrice = async (req, res, next) => {
    const { body: { price } } = req;
    if (price === undefined) {
        return res.status(400).json({ message: 'O campo price é obrigatório' });
    } 
    if (price <= 0) {
     return res.status(400).json({ 
        message: 'O campo price deve ser um número maior ou igual a zero' });
    }
   return next();
    };

    module.exports = validationPrice;