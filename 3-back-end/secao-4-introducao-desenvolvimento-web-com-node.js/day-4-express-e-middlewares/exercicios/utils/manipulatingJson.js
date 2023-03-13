const fs = require('fs').promises;
const path = require('path');

async function getEcoTurismo() {
    try {
        const allEcoTurismo = await fs.readFile(path.resolve(__dirname, '../ecoturismo.json'));
        const data = await JSON.parse(allEcoTurismo);
        return data;
} catch (error) {
        console.log(`Erro na leitura do arquivo ${error}`);
    }
}

async function postEcoTurismo(event) {
    const oldEcoTurismo = await getEcoTurismo();
    const newEcoTurismo = { id: oldEcoTurismo.length + 1, ...event };
    const allEcoTurismo = JSON.stringify([
        ...oldEcoTurismo, newEcoTurismo,
    ], null, 2);

    try {
        await fs.writeFile(path.resolve(__dirname, '../ecoturismo.json'), allEcoTurismo);
        console.log('Atividade cadastrada com sucesso!');
        return newEcoTurismo;
} catch (error) {
        console.log(`Erro na leitura do arquivo ${error}`);
    }
}

module.exports = {
    getEcoTurismo,
    postEcoTurismo,
};