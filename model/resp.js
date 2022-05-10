// const { number } = require('@hapi/joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
     fname:{
          type:String,
          // required:true
     },
     lname:{
          type:String,
          // required:true
     },
     email:{
          type:String,
          // required:true
     },
     contact:{
          type:Number,
          // required:true
     },
     college:{
          type:String,
          // required:true
     },
     password:{
          type:String,
          // required:true
     },
     date:{
          type:Date,
          default:Date.now
     }
})

module.exports = mongoose.model('resp',userSchema)