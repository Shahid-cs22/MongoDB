require("./index");
const mongoose = require("mongoose");
const Student = require("./model/Schema");

const getStudent = async()=>{
    const Students = await Student.find();
    console.log("Students", Students)
};

getStudent()