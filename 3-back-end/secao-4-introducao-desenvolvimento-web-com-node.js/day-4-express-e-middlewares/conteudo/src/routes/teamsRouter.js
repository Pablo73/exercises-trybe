const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const existingId = require('../middlewares/existingId');
const validateTeam = require('../middlewares/validateTeam');
const apiCredentials = require('../middlewares/apiCredentials');

const router = express.Router();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

router.get('/teams', (req, res) => res.json(teams));

router.use(apiCredentials);

// router.get('/teams/:id', existingId, (req, res) => {
//     const id = Number(req.params.id);
//     const team = teams.find((t) => t.id === id);
//       res.json(team);
//   });

router.get('/teams', async (req, res, next) => {
    try {
        const data = await fs.readFile(path.resolve(__dirname, './teams.json'));
        const teamsParse = JSON.parse(data);
        return res.status(200).json({ teamsParse });
    } catch (error) {
        return next(error);
    }
});

    // Arranja os middlewares para chamar validateTeam primeiro
router.post('/teams', validateTeam, (req, res) => {
    if (
      // confere se a sigla proposta está inclusa nos times autorizados
      !req.teams.teams.includes(req.body.sigla)
      // confere se já não existe um time com essa sigla
      && teams.every((t) => t.sigla !== req.body.sigla)
    ) {
      return res.status(422).json({ message: 'Já existe um time com essa sigla' });
    }
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    res.status(201).json(team);
  });

  router.put('/teams/:id', existingId, validateTeam, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find((t) => t.id === id);
      const index = teams.indexOf(team);
      const updated = { id, ...req.body };
      teams.splice(index, 1, updated);
      res.status(201).json(updated);
  });

  router.delete('/teams/:id', existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find((t) => t.id === id);
      const index = teams.indexOf(team);
      teams.splice(index, 1);
    res.sendStatus(204);
  });

  module.exports = router;