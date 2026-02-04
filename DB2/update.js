require("./server")
const mongoose = require("mongoose")
const student = require("./model/schema")

const updateStudent = async()=>{

    await student.updateOne({name:"Murugan"}, {$set:{course:"Social Science"}})
    console.log("student updated")
    



}

updateStudent()