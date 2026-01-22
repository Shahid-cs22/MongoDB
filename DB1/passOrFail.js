require("./index")
const mongoose = require("mongoose");
const Student = require("./model/Schema")

const runAddField = async () => {
    const result = await Student.aggregate([
        { $addFields: { passed: { $gte: ["$mark", 70] } } }
    ]);

    console.log(result);
    mongoose.connection.close();
}
runAddField()