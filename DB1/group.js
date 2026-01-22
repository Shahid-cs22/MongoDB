require("./index")
const mongoose = require("mongoose")
const Student = require("./model/Schema")

const groupOperator = async () => {
    try {
        const result = await Student.aggregate([
            {
                $group: {
                    _id: "$course",
                    highMark: { $max: "$mark" },
                    lowMark: { $min: "$mark" },
                    allStudents: { $push: "$name" },
                    uniqueCourse: { $addToSet: "$course" }
                }
            }
        ]);

        console.log("Group Marks");
        console.log(result)
    } catch (err) {
        console.log("erreor", err);
    }finally{
        mongoose.connection.close();
    }
}
groupOperator()