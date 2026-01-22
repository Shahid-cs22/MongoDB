require("./index")
const mongoose = require("mongoose");
const Student = require("./model/Schema")

const averageMark = async () => {
    try {
        const result = await Student.aggregate([
            {
                $group: {
                    _id: "$course",
                    avgMark: { $avg: "$mark" },
                    totalStudent: { $sum: 1 }
                }

            }
        ])
        console.log("Average marks : ")
        console.log(result)
    } catch (err) {
        console.log("error", err)
    } finally {
        mongoose.connection.close();
    }

}
averageMark()