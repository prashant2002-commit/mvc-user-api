const express = require('express')
const fs = require('fs')
const mongoose = require('mongoose')
const userRouter = require('./routes/user')
const {connectMongoDb} = require('./connection')
const {logReqRes} = require('./middleware')
// const users = require('./MOCK_DATA.json')

const app = express()
const PORT = 4000

//connection
connectMongoDb('mongodb://localhost:27017/my-app-1');


//middleware plugin
app.use(express.urlencoded({extended: false}))

app.use(logReqRes('log.txt'))


//routes
app.use('/api/users',userRouter)    //it tells whenever a request come in /user call the userRouter localhost/user/:id

app.listen(PORT,()=>{
    console.log('server started');
    
})

