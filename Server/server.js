const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require("cors")
const app = express()

//mongoose connection
mongoose.connect("mongodb://sani:sani1212@ds227322.mlab.com:27322/post-api")
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('err', err => console.log(err))
db.once('open', () => console.log("database conneted succesfully"))
//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
const userRoute = require("./Api/Routes/userRoute")
const Port = process.env.Port || 4000
app.use('/user', userRoute)
app.listen(Port, () => console.log(" I am listening on Port: " + Port))