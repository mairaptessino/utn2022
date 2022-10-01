const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemaclient = new schema({
    id: String,
    name: String,
    email: String, 
    phonenumber: String
})

const ModelClient = mongoose.model('clients', schemaclient)
module.exports = router

router.post('/addclient', (req,res) =>{
    const newclient = new ModelClient({
        name: req.body.name,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        id: req.body.id
    })

    newclient.save(function(err){
        if(!err){
            res.send('Client created')
        }else{
            res.send(err)
        }
    })
})

router.get('/getclients', (req,res)=>{
    ModelClient.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

router.post('/getdataclient', (req,res)=>{
    ModelClient.find({id:req.body.id}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

router.post('/editclient', (req,res) => {
  ModelClient.findOneAndUpdate({id:req.body.id}, {
    name: req.body.name,
    email: req.body.email,
    phonenumber: req.body.phonenumber
  }, (err) =>{
    if(!err){
        res.send('Client updated')
    }else{
        res.send(err)
    }
  })
})

router.post('/deleteclient', (req,res) => {
    ModelClient.findOneAndDelete({id:req.body.id}, (err) =>{
        if(!err){
            res.send('Client deleted')
        }else{
            res.send(err)
        }
    })
})