require("./index")
const mongoose = require("mongoose")
const Student = require("./model/Schema")

const bucket = async()=>{
    try{
        const result = await Student.aggregate([
            {
                $bucket:{
                    groupBy:"$marks",
                    boundaries:[0,50, 70, 90, 100],
                    default:"Invalid Markd",
                    output:{
                        totalStudent:{$sum:1},
                        avgMark:{$avg:"$mark"},
                        name:{$push:"$name"}
                    }
                }
            }
        ]);
        console.log("Result")
        console.log(result)
    }catch(err){
        console.log("err", err)
    }finally{
        mongoose.connection.close();
    }
};
bucket()