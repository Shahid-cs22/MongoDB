const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    marks: Number,
    course: String
})

module.exports = mongoose.model("student", studentSchema)
