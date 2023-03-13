// const validateTeam = (req, res, next) => {
//     const requiredProperties = ['nome', 'sigla'];
//     if (requiredProperties.every((property) => property in req.body)) {
//       return next(); // Chama o próximo middleware
//     } 
//       res.sendStatus(400); // Ou já responde avisando que deu errado
//   };

  const validateTeam = (req, res, next) => {
    const { nome, sigla } = req.body;
    if (!nome) return res.status(400).json({ message: 'O campo "nome" é obrigatório' });
    if (!sigla) return res.status(400).json({ message: 'O campo "sigla" é obrigatório' });
    next();
  };

  module.exports = validateTeam;
