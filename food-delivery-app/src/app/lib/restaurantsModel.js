const { default: mongoose } = require("mongoose");

const restaurantModel = new mongoose.Schema({
    name:String,
    email:String,
    address:String,
    number:String,
    password:String,
})

export const restaurantSchema = mongoose.models.restraurents
|| mongoose.model("restraurents", restaurantModel);