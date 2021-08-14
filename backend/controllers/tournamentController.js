const  asyncHandler = require("express-async-handler");
const Tournament = require("../models/tournamentModel");
const generateToken = require("../utils/generateToken.js");
const { sendResponse, sendError } = require("../utils/utils.js");
// @desc    Get logged in user notes
// @route   GET /api/notes
// @access  Private
const getTournaments = asyncHandler(async (req, res) => {
  const tournaments = await Tournament.find();
  // res.json(tournaments);
  sendResponse(res,tournaments);
});

//@description     Fetch single Note
//@route           GET /api/notes/:id
//@access          Public
const getTournamentById = asyncHandler(async (req, res) => {
  const tournament = await Tournament.findById(req.params.id);

  if (tournament) {
    sendResponse(res,tournaments);
  } else {
    sendError(res,{ message: "Note not found" });
  }

  // res.json(tournament);
});

//@description     Create single Note
//@route           GET /api/notes/create
//@access          Private
const CreateTournament = asyncHandler(async (req, res) => {
  const { mode, prize, scoring, start_time,teams, length,cost } = req.body;

  if (!mode || !prize || !scoring || !start_time || !length) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    return;
  } else {
    // const Tournament = new Tournament();

    const CreateTournament = await Tournament.create({ mode, prize,cost, scoring, start_time,teams, length });

    sendResponse(res,CreateTournament);
    // res.status(201).json(CreateTournament);
  }
});

//@description     Delete single Note
//@route           GET /api/notes/:id
//@access          Private
const DeleteTournament = asyncHandler(async (req, res) => {
  const tournament = await Tournament.findById(req.params.id);

//   if (tournament.user.toString() !== req.user._id.toString()) {
//     res.status(401);
//     throw new Error("You can't perform this action");
//   }

  if (tournament) {
    await tournament.remove();
    res.json({ message: "Tournament Removed" });
  } else {
    res.status(404);
    throw new Error("Tournament not Found");
  }
});

// @desc    Update a note
// @route   PUT /api/notes/:id
// @access  Private
const UpdateTournament = asyncHandler(async (req, res) => {
  const { mode, prize, scoring, start_time,teams, length,cost } = req.body;

  const tournament = await Tournament.findById(req.params.id);

//   if (note.user.toString() !== req.user._id.toString()) {
//     res.status(401);
//     throw new Error("You can't perform this action");
//   }

  if (tournament) {
    tournament.mode = mode;
    tournament.prize = prize;
    tournament.scoring = scoring;
    tournament.start_time = start_time;
    tournament.teams = teams;
    tournament.length = length;
    tournament.cost = cost;

    const updatedTournament = await tournament.save();
    // res.json(updatedTournament);
    sendResponse(res,updatedTournament);
  } else {
    res.status(404);
    sendError(res,"Tournament not found");
  }
});

module.exports = { getTournamentById, getTournaments, CreateTournament, DeleteTournament, UpdateTournament };

