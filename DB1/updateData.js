require("./index")
const mongoose = require("mongoose");
const Student = require("./model/Schema");

const updateStudent = async()=>{
    await Student.updateOne({name:"Shahid"}, {$set:{name:"Ahamed Shahid"}});
    console.log("student updated")
};

updateStudent()