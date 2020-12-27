const express=require('express')
const router=express.Router()
const Article=require('../models/Article')

router.get('/', async (req, res)=>{
    try {
        const articles=await Article.find()
        res.render('index', {articles: articles})
    } catch (err) {
        console.error(err)
        res.status(500).send("Server error")
    }
})

module.exports=router