const mongoose = require('mongoose')

const schema = mongoose.Schema({
name:{type: String,required: true},
email:{type: String,required: true},
topics:[{type:String,ref:'Topic'}]
})

const model = mongoose.model('User', schema)

module.exports = model;