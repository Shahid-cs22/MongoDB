const mongoose = require("mongoose")
const url = "mongodb://localhost:27017/DB2"

mongoose.connect(url)
.then(()=>{
    console.log("MongoDB Connect to database DB2")
})
.catch((err)=>{
    console.log("error", err)
})