require("./server")
const mongoose = require("mongoose")
const student = require("./model/schema")

const addMoreStudent = async()=>{
    // await student.deleteMany({});
    await student.insertMany([
        {id:90, name:"Raihan", age:20, marks:38, course:"IT" },
        {id:132, name:"Thalha", age:24, marks:60, course:"CSE" },
        {id:41, name:"Aakif", age:21, marks:90, course:"EEE" },

    ])
    console.log("samole data inserted")
    
}
addMoreStudent()
