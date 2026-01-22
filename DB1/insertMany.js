require("./index");
const mongoose = require("mongoose");
const Student = require("./model/Schema");

const insertData = async () => {
    await Student.deleteMany({});
    await Student.insertMany([
        {
            name: "Mohamed",
            age: 20,
            course: "CSE",
            mark: 90
        },
        {
            name: "Shahid",
            age: 21,
            course: "EEE",
            mark: 70
        },
        {
            name: "Kumar",
            age: 23,
            course: "ECE",
            mark: 80
        },
        {
            name: "Santhose",
            age: 23,
            course: "ECE",
            mark: 40
        },
        {
            name: "Agash",
            age: 20,
            course: "CSE",
            mark: 60
        }
    ])
    console.log("Sample data inserted")


};

insertData();