require("./server")
const mongoose = require("mongoose")
const student = require("./model/schema")

const runAddField = async()=>{
    const result = await student.aggregate([
        {$addFields:{passed:{$gte:["$marks", 85]}}}
    ])
    console.log(result)
    mongoose.connection.close()
}
runAddField()