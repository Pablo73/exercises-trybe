//SINCRONO---------------------------------------------------------

// const fs = require('fs');

// const nomeDoArquivo = 'lerolero.txt';

// try {
//   const data = fs.readFileSync(nomeDoArquivo, 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(`Erro ao ler o arquivo: ${err.path}`);
//   console.log(err);
// }


//ASSINCRONO---------------------------------------------------------------

const fs = require('fs').promises;

async function main() {
  try {
    const data = await fs.readFile('./lerolero.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()