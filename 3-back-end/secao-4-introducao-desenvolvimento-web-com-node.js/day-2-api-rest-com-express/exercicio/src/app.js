const express = require('express');
const { getMovies, postMovies, putMovies, deleteMovie } = require('./utils/readJsonData');

const app = express();

app.use(express.json());

app.get('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const value = await getMovies();
    const isMovie = value.find((movie) => +movie.id === +id);
    if (!isMovie) {
        res.status(404).json({ message: 'Filme não encontrado' });
      } else {
        const requestedMovies = value.filter((movie) => +movie.id === +id);
         res.status(200).json(requestedMovies);
      }
});

app.get('/movies', async (req, res) => {
    const value = await getMovies();
    res.status(200).json({ value });
});

app.post('/movies', async (req, res) => {
    const { body } = req;
    // const value = await getMovies();

    // value.push({
    //     id: value.length + 1,
    // ...body,
    // });
    const movie = await postMovies(body);

    res.status(201).json(movie);
});

app.put('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    // const value = await getMovies();
    // const isMovie = value.find((movie) => +movie.id === +id);

    // isMovie.movie = body.movie;
    // isMovie.price = body.price;
    
    const upDateMovie = await putMovies(+id, body);

    res.status(204).json(upDateMovie);
});

app.delete('/movies/:id', async (req, res) => {
    const { id } = req.params;
    await deleteMovie(+id);

    res.status(204).end();
});

module.exports = app; 