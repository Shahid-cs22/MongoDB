require("./server")

const mongoose = require("mongoose")
const student = require("./model/schema")

const add = async()=>{
    const Student= new student({
        id:77,
        name:"Rashid",
        age:21,
        marks:70,
        course:"cs"
    });

    await Student.save()
    console.log("student added", Student)
    mongoose.connection.close()
}
add()