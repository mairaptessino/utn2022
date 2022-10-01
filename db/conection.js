const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/dbmyapp');

const objectdb = mongoose.connection

objectdb.on('connected', ()=>{console.log('The connection to the database has been successfully established.')})
objectdb.on('error', ()=>{console.log('Error connecting to database')})

module.exports = mongoose
