const express = require("exprss")
const router = express.Router()
const Contact=require("../models/Contact")

// add new contact
router.post("/add",async(req,res)=>{
      const {name,email,phone} = req.body
      const newContact= new Contact({name,email,phone})
      const contact = await newContact.save()
      res.send({msg:"Done",contact})
})
//get all users
router.get("/",async(req,res)=>{
    const contacts = await Contact.find()
    res.send({msg:"data fetched",contacts})

})
//delete
router.delete("/delete/:id",async(req,res)=>{
    const{id} = req.params
    const contact = await Contact.findOneAndDelete({_id:id})
    res.send({msg:"Removed",contact})
})
//Update
router.delete("/edit/_id",async(req,res)=>{
    const{id} = req.params
    const contact = await Contact.findOneAndUpdate({_id},{$set:req.body})
    res.send({msg:"Updated",contact})
})


module.expert = router

