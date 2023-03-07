const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./lerolero.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()