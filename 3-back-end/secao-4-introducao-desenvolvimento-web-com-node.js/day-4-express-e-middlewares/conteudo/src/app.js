const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const teamsRouter = require('./routes/teamsRouter');

const app = express();
app.use('/static', express.static('public'));
app.use(morgan('combined'));
app.use(cors());
app.use(helmet());
app.use(teamsRouter);

const limiter = rateLimit({
  max: 100, // número máximo de requisições
  windowMs: 15 * 60 * 1000, // intervalo de tempo, em milissegundos, para atingir o número máximo de requisições
  message: 'Muitas requisições originadas desta IP', // mensagem personalizada quando atinge o limit rate
});

app.use(limiter);

const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}`));

app.use((error, _req, res, _next) => res.status(500).json({ error: error.message }));

module.exports = app;