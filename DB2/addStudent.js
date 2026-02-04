require("./server")

const mongoose = require("mongoose")
const student = require("./model/schema")

const add = async()=>{
    const Student= new student({
        id:26,
        name:"Hussain",
        age:21,
        marks:50,
        course:"Social Science"
    });

    await Student.save()
    console.log("student added", Student)
    mongoose.connection.close()
}
add()