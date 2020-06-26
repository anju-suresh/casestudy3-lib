const express= require('express');
const signRouter= express.Router();
const signupdata=require('../model/signupdata');
function router(nav){
signRouter.get("/",(req,res)=>{
    res.render("signUp",
    {
        nav
        
    });
})
signRouter.post('/add',(req,res)=>{
    var item={
    type: req.body.usercred,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
    }
    let type= req.body.usercred;
    let name= req.body.name
    
    var auth=signupdata(item);
    auth.save();
    res.redirect("/login");
});
return signRouter
}
module.exports=router;