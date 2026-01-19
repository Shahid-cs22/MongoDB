require("./index")
const mongoose = require("mongoose");
const Student = require("./model/Schema");

const totalMarks = async()=>{

    try{

        const result = await Student.aggregate([
            {
                $group:{
                    _id:" $course",
                    totalMarks:{$sum:"$mark"},
                    totalCourse:{$sum:1}
                }
            }
        ])
        console.log("Total marks")
        console.log(result)

    }catch(err){
        console.error("error")
    }finally{
        mongoose.connection.close
    }
    
};
totalMarks();