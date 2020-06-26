const express= require('express');
const authorRouter= express.Router();
const Authordata = require('../model/authorData');

authorRouter.get("/",(req,res)=>{
    Authordata.find()
    .then((author)=>{
        res.render("author",
        {
            nav:[{link:'/author' , name:'Author'},{link:'/admin/add' , name:'Add Author'},{link:'/books' , name:'Books'},{link:'/login', name:'Log Out'}],
            author
        });
    })
   
});
authorRouter.get('/:id',(req,res)=>{
    const id=req.params.id
    Authordata.findOne({_id: id})
    .then((singleauthor)=>{
        res.render('singleAuthor',{
            nav:[{link:'/author' , name:'Author'},{link:'/admin/add' , name:'Add Author'},{link:'/books' , name:'Books'},{link:'/login', name:'Log Out'}],
            singleauthor
        });
    })
   
});

module.exports=authorRouter;
