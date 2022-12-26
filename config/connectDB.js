const mongoose = require("mongoose")
const config = require("config")

const connectDB=()=>{
    mongoose.connect(config.get( "MONGO_URI")) 
    .than(()=>console.log("Mongoose Connected"))
    .catch((err)=>console.log(err))
}
module.exports=connectDB