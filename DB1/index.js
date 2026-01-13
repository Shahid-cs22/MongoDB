const mongoose = require("mongoose")

const uri = "mongodb://localhost:27017/Shahid";

mongoose.connect(uri)
    .then(() => {
        console.log("mongoDB connected");

    })
    .catch(() => {
        console.log("error", err)
    })