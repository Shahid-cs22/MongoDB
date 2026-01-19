require("./index")
const mongoose = require("mongoose")
const Student = require("./model/Schema");

const deleteStudent = async()=>{
    await Student.deleteOne({name:"Ahamed Shahid"});
    console.log("Student deleted")
}

deleteStudent();