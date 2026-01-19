require("./index")
const mongoose = require("mongoose")
const Student = require("./model/Schema")

const addStudent = async () => {

    const student = new Student({
        id: 77,
        name: "Shahid",
        age: 21,
        course:"Computer Science"
    });

    await student.save();
    console.log("Student added", student);
    mongoose.connection.close();

};

addStudent();