const express=require('express')
const { findById } = require('../models/Article')
const router=express.Router()
const Article=require('../models/Article')

router.get('/new', (req, res)=>{
    res.render('new')
})

router.get('/:id', async (req, res)=>{
    try {
        const article=await Article.findById(req.params.id)
        res.render('show', {article: article})
    } catch (err) {
        
    }
})

router.post('/', async (req, res)=>{
    const article=new Article({
        name: req.body.name,
        content: req.body.content
    })
    try {
        await article.save()
        res.redirect('/')
    } catch (err) {
        console.error(err)
        res.status(500).send("Server error")
    }
})

router.delete('/:id', async (req, res)=>{
    try {
        await Article.findByIdAndDelete(req.params.id)
        res.redirect('/')
    } catch (err) {
        console.error(err)
        res.status(500).send("Server error")
    }
})

module.exports=router