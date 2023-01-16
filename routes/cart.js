var express = require('express');
var router = express.Router();
require('../models/connexion')
const trips = require('../models/trips')
const idOrder = require('./cart')


let arrayBook = []



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});





router.post('/idTrip', (req, res)=> {

  if(arrayBook.includes(req.body.idTrip)){
    res.json("you already booked this trip")
  }
  else{
    res.json("you booked this trip")
    arrayBook.push(req.body.idTrip)
    console.log(arrayBook)
  }
})

router.get('/idTrip', (req, res)=> {

  trips.find({_id:{$in:arrayBook}}).then(data=>{
    res.json(data)
  }
  )

})

router.delete('/deleteTrip', (req, res)=> {
let id = req.body.id
trips.findByIdAndDelete(id).then(data=>{
    res.json(data)
  
  }
  )
})

module.exports = router;

