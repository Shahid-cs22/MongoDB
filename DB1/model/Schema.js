const mongoose = require("mongoose")
const students = new mongoose.Schema({
    id:Number,
    name:String,
    age:Number,
    course:String,
    mark:Number
});

module.exports= mongoose.model("student", students)