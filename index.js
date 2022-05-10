const express = require('express')
const app = express()

const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')

dotenv.config()

//Connect to DB
mongoose.connect(process.env.DB_CONNECT,()=>{
     console.log("Connected to DB")
})
require('./model/resp')
const resp = mongoose.model('resp')

//Middleware
app.use(cors({ origin:"*" }))
app.use(express.json())

app.post('/register', async (req,res)=>{

     const user = new resp()
     user.fname = req.body.fname
     user.lname = req.body.lname
     // user.email = req.body.email
     // user.contact = req.body.contact
     // user.college = req.body.college
     // user.password = req.body.password
     console.log("user fetched")
     user.save((err,result)=>{
               if (!err){
                    console.log("data saved")
                    res.send(result)
               }
               else{
                    res.status(400).send(err)
               }
     })
})
app.get('/show',(req,res)=>{
     resp.find((err,result)=>{
          if (!err){
               res.send(result)
          }
          else{
               res.status(400).send(err)
          }
     })
})

app.listen(3000,()=>{
     console.log("SERVER is running at 3000");
})