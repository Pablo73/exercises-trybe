const fs = require('fs').promises;
const path = require('path');
const readline = require('readline-sync');

async function getSimpsons () {
    try {
        // const data = await fs.readFile(path.resolve(__dirname, './simpsons.json'));
        const data = await fs.readFile('./simpsons.json');

        const simpsons = JSON.parse(data);

        return simpsons;

    } catch (error) {
        console.log(`Erro na leitura do arquivo ${error}`)
    }
}

async function allSimpsons () {
    try {
        const allSimpsons = await getSimpsons();
        const nameSimpsons = allSimpsons.forEach((ele) => console.log(`${ele.id} - ${ele.name}`));
    } catch (error) {

        console.log(`Erro na leitura do arquivo ${error}`)

    }
}

async function getId (id) {
    try {
        const allSimpsons = await getSimpsons();
        const idSimpsons = allSimpsons.find((ele) => +ele.id === +id);
        if(idSimpsons) {
            return idSimpsons
        } else {
            return 'id não encontrado'
        }

    } catch (error) {

        console.log(`Erro na leitura do arquivo ${error}`)

    }
}



async function newSimpsons () {
    try {
        const allSimpsons = await getSimpsons();
        const newArray = allSimpsons.filter((ele) => 
            +ele.id !== 10 && +ele.id !== 6)
        return newArray

    } catch (error) {

        console.log(`Erro na leitura do arquivo ${error}`)
    }
}

async function newFile () {
    try {
        const allSimpsons = await getSimpsons();
        const simpsonsFamily = allSimpsons.filter((ele) => 
            +ele.id === 1 || +ele.id === 4)
      await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));

    } catch (error) {

        console.log(`Erro na leitura do arquivo ${error}`)
    }
}

async function addCharacter () {
    try {
        // const data = await fs.readFile(path.resolve(__dirname, './simpsons.json'));
        const data = await fs.readFile('./simpsonsFamily.json');

        const simpsons = JSON.parse(data);

        const newCharacter = [...simpsons, {id: '11', name: 'Nelson Muntz'}];

        await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newCharacter));

    } catch (error) {
        console.log(`Erro na leitura do arquivo ${error}`)
    }
}

async function replaceCharacter () {
    try {
        const data = await fs.readFile('./simpsonsFamily.json');

        const simpsons = JSON.parse(data);

      const replace = simpsons.filter((ele) => ele.name !== 'Nelson Muntz');

      const newCharacter = {id: '11', name: 'Maggie Simpson'};
      const newObject = [...replace, newCharacter]

        await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newObject));

    } catch (error) {
        console.log(`Erro na leitura do arquivo ${error}`)
    }
}

async function main() {
    // console.log(await newSimpsons());
    // await allSimpsons();
    // console.log(await getId(33));
    // console.log(await newSimpsons());
    // await newFile();
    // await addCharacter();
    replaceCharacter();
};

main();

