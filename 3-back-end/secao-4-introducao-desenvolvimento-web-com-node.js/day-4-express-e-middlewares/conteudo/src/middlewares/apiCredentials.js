// src/middlewares/apiCredentials.js

const fs = require('fs/promises');

// como vamos ler arquivos assincronamente, precisamos do async
module.exports = async function apiCredentials(req, res, next) {
  // pega o token do cabeçalho, se houver
  const token = req.header('X-API-TOKEN');
  // lê o conteúdo do `./authdata.json` (relativo à raiz do projeto)
  const authdata = await fs.readFile('./authdata.json', { encoding: 'utf-8' });
  // readFile nos deu uma string, agora vamos carregar um objeto a partir dela
  const authorized = JSON.parse(authdata);

  if (token in authorized) {
    next(); // pode continuar
  } else {
    res.status(401).json({ message: 'Token inválido ou expirado' }); // não autorizado
  }
};