const mongoose = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsScheam.js");

const PositionsModel = mongoose.model("Position", PositionsSchema);

module.exports = { PositionsModel };
