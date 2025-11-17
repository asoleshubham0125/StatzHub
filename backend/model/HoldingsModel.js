const { model } = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldeingsSchema");

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
