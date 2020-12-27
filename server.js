const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const fs=require('fs')
const methodOverride=require('method-override')

//Set view engine
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
//Setup method override
app.use(methodOverride('_met'))
//Init dotenv
dotenv.config({path: './config/config.env'})
//Init mongodb
mongoose.connect(process.env.MONGODB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true})
//Setup routes
app.use('/', require('./routes/index'))
app.use('/articles', require('./routes/articles'))
app.use((req, res, next)=>{
    res.status(404).send("404 page not found")
})
//Init server
app.listen(process.env.HTTP_PORT, console.log(`Server running in ${process.env.NODE_MODE} mode in port ${process.env.HTTP_PORT}`))