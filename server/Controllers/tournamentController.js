const Tournament = require("../Models/tournament");

// ---------------------------------------------------------------
// @req POST
// @route /api/v1/tournament
// @desc creating a new tornament from admin
exports.ceateTournament = async (req, res) => {
  try {
    const { body } = req;
    //  validating data from admin side on creation
    const data = await Tournament.create({
      ...body,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ---------------------------------------------------------------
// @req GET
// @route /api/v1/tournament
// @desc getting all tournaments
exports.getTournament = async (req, res) => {
  try {
    const data = await Tournament.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
