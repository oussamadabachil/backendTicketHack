const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tripsSchema = new Schema({
    
   departure:String,
   arrival:String,
   date:Date,
   price:Number
     });

     
const Trip = mongoose.model('trips', tripsSchema);
module.exports = Trip;





      