const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const mongo_uri = process.env.MONG_URI
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')
//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)

// connext to db
mongoose.connect(mongo_uri)
  .then(()=>{
    //listen to requests once db is connected
    app.listen(port,()=>{
        console.log('connected to db and listening on port',port)
    })
  })
  .catch((error)=>{
    console.log(error)
  })
