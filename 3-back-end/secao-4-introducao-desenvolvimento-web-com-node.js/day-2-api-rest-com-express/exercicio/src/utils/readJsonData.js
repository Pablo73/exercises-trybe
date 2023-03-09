const fs = require('fs').promises;
const path = require('path');

async function getMovies() {
    try {
        const allMovies = await fs.readFile(path.resolve(__dirname, '../movies.json'));
        const data = await JSON.parse(allMovies);
        return data;
} catch (error) {
        console.log(`Erro na leitura do arquivo ${error}`);
    }
}

async function postMovies(movies) {
    const oldMovie = await getMovies();
    const newMovie = { id: oldMovie.length + 1, ...movies };
    const allMovies = JSON.stringify([
        ...oldMovie, newMovie,
    ]);

    try {
        await fs.writeFile(path.resolve(__dirname, '../movies.json'), allMovies);
        console.log(`Movie com id-${oldMovie.length + 1} inserido`);
        return newMovie;
} catch (error) {
        console.log(`Erro na leitura do arquivo ${error}`);
    }
}

async function putMovies(id, updateMovie) {
    const oldMovie = await getMovies();
        const updateMovieId = { id, ...updateMovie };

        const upDate = oldMovie.reduce((add, curr) => {
            if (+curr.id === +updateMovieId.id) {
                return [...add, updateMovieId];
            }
            return [...add, curr];
        }, []);
        const newJson = JSON.stringify(upDate);

    try {
        await fs.writeFile(path.resolve(__dirname, '../movies.json'), newJson);
        console.log(`Movie com id-${id} atualizado`);
        return updateMovieId;
} catch (error) {
        console.log(`Erro na leitura do arquivo ${error}`);
    }
}

async function deleteMovie(id) {
    const oldMovie = await getMovies();
    const isMovieDelete = oldMovie.filter((movie) => +movie.id !== +id);
    const movieDelete = oldMovie.filter((movie) => +movie.id === +id);
    const newJson = JSON.stringify(isMovieDelete);
    try {
        await fs.writeFile(path.resolve(__dirname, '../movies.json'), newJson);
        console.log(`Movie com id-${id} deletado`);
        return movieDelete;
} catch (error) {
        console.log(`Erro na leitura do arquivo ${error}`);
    }
}

module.exports = {
    getMovies,
    postMovies,
    putMovies,
    deleteMovie,
};