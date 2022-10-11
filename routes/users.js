const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.send('Users List');
})
router.get('/new',(req,res)=>{
    res.render("/users/new",{firstName:'Test'});
})
router.get('/:id',(req,res)=>{
    res.send("Get new user with ID " +req.params.id);
})
router.put('/:id',(req,res)=>{
    res.send("Update new user with ID " +req.params.id);
})
router.delete('/:id',(req,res)=>{
    res.send("Delete new user with ID " +req.params.id);
})
module.exports=router;