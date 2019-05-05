const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: { type: String, required: true },
  address: {type: String, required: true},
  type: { type: Array, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true }
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
