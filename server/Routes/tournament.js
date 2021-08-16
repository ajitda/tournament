const express = require("express");
const router = express.Router();

const conteroller = require("../Controllers/tournamentController");
const { auth } = require("../Middlewares/auth");

router.post("/", auth, conteroller.ceateTournament);

router.get("/", conteroller.getTournament);

module.exports = router;
