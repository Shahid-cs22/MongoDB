require("./server")
const mongoose = require("mongoose")
const student = require("./model/schema")

const deleteStudent = async()=>{
    await student.deleteOne({name:"Murugan"})
    console.log("Successfully student was deleted ")
}

deleteStudent()