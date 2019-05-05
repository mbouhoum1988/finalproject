const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://placessearch:mb123456@ds151076.mlab.com:51076/heroku_7hjw8tv4");

const placeSeed = [
  {
    name: "The Hunger Games",
    address: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    type: ["Suzanne Collins"],
    lat: 12345,
    lng: 34567
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
