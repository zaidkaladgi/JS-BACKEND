//console.log("abcd");
const express = require('express');
//import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter',(req,res) =>{
    res.send('zaidkkk')
})
app.get('/twitters',(req,res) =>{
    res.send('zaidkkkkk')
})



app.get('/login',(req,res) =>{

    res.send('<h1>please login')
})



app.get('/myself', (req, res) => {
    res.send('Hello Zaid');
});












app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

