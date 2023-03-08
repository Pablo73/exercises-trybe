const express = require('express');

const app = express();

app.use(express.json());

const teams = [
    {
        id: 1,
        name: 'São Paulo Futebol Clube',
        initials: 'SPF',
    },
    {
        id: 2,
        name: 'Clube Atlético Mineiro',
        initials: 'CAM',
    },
];

// app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);
  
    res.status(201).json({ team: newTeam });
  });

  app.put('/teams/:id', (req, res) => {
    const { id } = req.params;
    const { name, initials } = req.body;
  
    const updateTeam = teams.find((team) => team.id === Number(id));
  
    if (!updateTeam) {
      res.status(404).json({ message: 'Team not found' });
    }
  
    updateTeam.name = name;
    updateTeam.initials = initials;
    res.status(200).json({ updateTeam });
  });

  app.get('/teams/:id', (req, res) => {
   const time = req.params;

   const getTeams = teams.reduce((acc, curr) => {
    if (+curr.id === +time.id) {
        return curr.name;   
    } 
    return acc;
}, '');
 
    res.status(200).json(getTeams);
});

module.exports = app; 