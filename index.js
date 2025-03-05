﻿
require('dotenv').config()
const express = require('express')
const app = express()
const port=3000

app.get('/',(req,res)=>{
    res.send('Hello World!')

})
app.get('/twitter',(req,res)=>{
    res.send('bhanudotcom')

}),
app.get('/login',(req,res)=>{
    res.send('<h1>Please Login here!</h1>')
})
app.get('/google',(req,res)=>{
    res.send('<h2><a href="https://www.google.com/">Google Link Click Here^_^</a></h2>')
})
app.listen(process.env.PORT,()=>{
    console.log(`example app ${port}`)
})
