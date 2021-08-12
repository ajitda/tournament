const express = require('express');
const tournaments = require('./data/tournaments');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const tournamentRoutes = require("./routes/tournamentRoutes");
const userRoutes = require("./routes/userRoutes.js");
const cors = require('cors')
// import userRoutes from "./routes/userRoutes.js";
const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{ 
    res.send("API is running");
})

app.use("/api/users", userRoutes);
// app.get('/api/tournaments', (req, res)=>{
//     res.json(tournaments);
// })
// app.get('/api/tournaments/id', (req, res)=>{
//     const turnament = tournaments.find((n)=>n._id === req.params.id);
//     res.json(tournament);
// })

app.use('/api/tournaments', tournamentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on port ${PORT}`));