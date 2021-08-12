const express = require('express');
const tournaments = require('./data/tournaments');
const dotenv = require('dotenv');

const app = express();

app.get('/', (req, res)=>{
    res.send("API is running");
})

app.get('/api/tournaments', (req, res)=>{
    res.json(tournaments);
})
app.get('/api/tournaments/id', (req, res)=>{
    const turnament = tournaments.find((n)=>n._id === req.params.id);
    res.json(tournament);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on port ${PORT}`));