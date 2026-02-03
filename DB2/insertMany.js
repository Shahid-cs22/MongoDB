require("./server")
const mongoose = require("mongoose")
const student = require("./model/schema")

const addMoreStudent = async()=>{
    await student.deleteMany({});
    await student.insertMany([
        {id:121, name:"Mohamed", age:20, marks:78, course:"IT" },
        {id:132, name:"Shahid", age:24, marks:70, course:"CSE" },
        {id:41, name:"Murugan", age:21, marks:90, course:"EEE" },

    ])
    console.log("samole data inserted")
    
}
addMoreStudent()
