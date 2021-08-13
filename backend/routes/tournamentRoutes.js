const express = require('express');
const router = express.Router();
const {
  getTournamentById,
  getTournaments,
  CreateTournament,
  DeleteTournament,
  UpdateTournament,
} = require ("../controllers/tournamentController.js");

const { protect } = require("../middleware/authMiddleware.js");

router.route("/").get(protect, getTournaments);
router
  .route("/:id")
  .get(getTournamentById)
  .delete(protect, DeleteTournament)
  .put(protect, UpdateTournament);
router.route("/create").post(protect, CreateTournament);

module.exports = router;