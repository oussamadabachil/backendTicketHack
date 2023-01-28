var express = require("express");
var router = express.Router();
require("../models/connexion");
const trips = require("../models/trips");

let arrayTrips = [];

router.post("/showTrip", (req, res) => {
  if (arrayTrips.includes(req.body.idTrip)) {
    res.json("you already booked this trip");
  } else {
    res.json("you booked this trip");
    arrayTrips.push(req.body.idTrip);
    console.log(arrayTrips);
  }
});

router.get("/showTrip", (req, res) => {
  trips.find({ _id: { $in: arrayTrips } }).then((data) => {
    res.json(data);
  });
});

module.exports = router;
