const express = require("express")
const app = express()
const expressLayout = require("express-ejs-layouts")

//configuration---defining settings
app.set('view engine', 'ejs')//what engine to use when rendering templates
app.set('layout', 'layouts/layout')
app.use(expressLayout)
app.use(express.static('public'))

// mongoose setup

const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/").then(()=> console.log("mongoose connected")).catch((error)=>console.log(error))

const indexRouter = require('./routes/index')
app.use('/', indexRouter)

app.listen(3000)