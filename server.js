const express = require("exprss")
const { connect } = require("mongoose")
const app = express()

const connectDB = require("./config/connectDB")
//connect to the database
connectDB()

app.use("/contacts",require("./routes/contact"))
const port= 5000
app.Listen(port,(err)=>{
    err?console.log(err):console.log("server is running")
})