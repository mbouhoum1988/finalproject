const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/finalproject");

const placeSeed = [
  {
    name: "The Hunger Games",
    address: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    type: ["Suzanne Collins"]
  }
];

db.Place
  .remove({})
  .then(() => db.Place.collection.insertMany(placeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
