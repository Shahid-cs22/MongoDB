require("./server")
const mongoose = require("mongoose")
const student = require("./model/schema")

const averageMark = async()=>{
    try{
        const result= await student.aggregate([
            {
                $group:{
                    _id:"$course",
                    averageMark:{$avg:"$marks"},
                    totalStudent:{$sum:1}
                }
            }
        ])
        console.log("Average Student")
        console.log(result)
    }catch(err){
        console.log("error", err)
    }finally{
        mongoose.connection.close()
    }
}
averageMark()