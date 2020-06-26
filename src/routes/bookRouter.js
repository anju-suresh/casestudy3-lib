const express= require('express');
const bookRouter= express.Router();

const Bookdata = require('../model/bookData');
const nav=[
    {
        link:'/author' , name:'Author'
    },
    {
        link:'/books' , name:'Books'
    },
    {
        link:'/admin' , name:'Add Book'
    },
    {
        link:'/login', name:'Log Out'
    }
]


bookRouter.get("/",(req,res)=>{
    Bookdata.find()
    .then((books)=>{
        
        res.render("books",
        {
            nav,
            books
        });
    })
   
});

bookRouter.get('/:id',(req,res)=>{
    const id=req.params.id
    Bookdata.findOne({_id: id})
    .then((book)=>{
        res.render('book',{
            nav,
            book
        });
    })   
});
// bookRouter.get('/remove/:id',(req,res)=>{
//     const id=req.params.id
//     Bookdata.deleteOne({_id: id})
//     .then((books)=>{
//         res.redirect('/books')
//     })   
// });

module.exports=bookRouter;
