const mongoose = require('mongoose')

const schema = mongoose.Schema({
name:{type:String},
contents:[{content:String,time:Date}]
})

const model = mongoose.model('Topic', schema)

module.exports = model;