const express= require('express');
const logRouter= express.Router();
const Authordata = require('../model/authorData');
const signupdata=require("../model/signupdata");
function router(nav){
logRouter.get("/",(req,res)=>{
    let errmsg=" "
    res.render("login",
    {
        nav,
        errmsg

    });
});

logRouter.post("/validate",function(req,res,next){
    var userid=req.body.mail;
    console.log(userid)
    var password=req.body.pass;
    console.log(password)
    signupdata.find()
    .then((data)=>{
        for(let i=0;i<data.length;i++){
            if((userid==data[i].email)&&(password==data[i].password)){
                Authordata.find()
                .then((author)=>{
                    res.render("author",
                    {
                        nav:[{link:'/author' , name:'Author'},{link:'/addAuthor' , name:'Add Author'},{link:'/books' , name:'Books'},{link:'/login', name:'Log Out'}],
                        author,
                        user:data[i]
                    });
                })
            }
            else{
                let errmsg="Invalid user,Please Sign UP "
                res.render("login",
                {
                    nav,
                    errmsg

                });
            }
        }
    })
})
return logRouter;
}
module.exports=router;
