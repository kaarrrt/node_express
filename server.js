const express=require('express');
const app=express();
app.set("view engine","ejs");
app.get('/',(req,res)=>{
    res.render("index",{text:"World"});
})
app.use(logger);
const userRouter=require('./routes/users');
app.use('/users',userRouter);
function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}
app.listen(3000);