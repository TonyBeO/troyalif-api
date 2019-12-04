const mongoose = require("mongoose")
const {Schema} = mongoose;


const driverSchema = new Schema({
    name:String,
    mail:String,
    password:String, 
    expediente:String,
    phone:String,
    userType:String,
    routes:{
    days:{
        lunes:[],
        martes:[],
        miercoles:[],
        jueves:[],
        viernes:[],
    },
    coordinates:[{
        longitude: Number,
        latitude: Number
    }],
    checkPoints:[String]
}})

module.exports = mongoose.model("driver", driverSchema); 