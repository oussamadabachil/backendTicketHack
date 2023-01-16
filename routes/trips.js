var express = require("express");
const moment = require("moment");
var router = express.Router();
require("../models/connexion");
const trips = require("../models/trips");

let dateOfTheDay = new Date().getTime();

router.get("/", (req, res) => {
  trips.find().then((data) => {
    console.log(data);
    res.json(data);
  });
});

router.get("/getTrip/:departure/:arrival/:date", (req, res) => {
  let departure = req.params.departure;
  let arrival = req.params.arrival;
  let date = req.params.date;
  trips
    .find({
      departure: { $regex: new RegExp(departure, "i") },
      arrival: { $regex: new RegExp(arrival, "i") },
      date: {
        $gte: moment(date).startOf("day"),
        $lte: moment(date).endOf("day"),
      },
    })
    .then((data) => {
      if(data.length > 0){
        res.json({ result: true, data: data });
      }else{
        res.json({ result: false, message: "No trip found" });
      }
 
        
   
    });
});

module.exports = router;
