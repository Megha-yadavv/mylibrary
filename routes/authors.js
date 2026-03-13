const express = require("express")
const router = express.Router()

//model
const Author = require('../models/author')

//All author 
router.get('/',(req,res)=>{
    res.render("authors/index")
})

//New author display
router.get('/new',(req,res)=>{
    res.render("authors/new",{author: new Author()})
})

//Create new author
router.post('/',(req, res)=>{
    res.send("crete")
})


module.exports = router