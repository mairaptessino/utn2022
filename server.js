const express = require('express')
const app = express()

const filesdb = require('./db/conection')

const routeclient = require('./routes/client.js')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/client', routeclient)

app.get('/', (req,res)=>{
    res.end('Welcome to the server of Myapp')
})

app.listen(5000, function(){
    console.log('The server works')
})