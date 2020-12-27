const mongoose=require('mongoose')
const articleSchema=mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

module.exports=mongoose.model('Article', articleSchema)