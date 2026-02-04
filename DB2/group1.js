require("./server")
const mongoose = require("mongoose")
const student = require("./model/schema")

const totalMark = async()=>{
    try{
        const result = await student.aggregate([
            {
                $group:{
                    _id:"$course",
                    totalMarks:{$sum: "$marks"},
                    totalCourse:{$sum:1}
                }
            }
        ]);
        console.log("Total Marks")
        console.log(result)
    }catch(error){
        console.log("error")
    }finally{
        mongoose.connection.close()
    }
};

totalMark()

