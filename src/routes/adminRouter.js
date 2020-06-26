const express= require('express')

const adminRouter = express.Router()
path=require('path')
fs = require('fs-extra')
multer = require('multer')
util = require('util')
path=require('path')
upload = multer({limits: {fileSize: 2000000 },dest:'public/upload'}) 
const bookData= require('../model/bookData')
const authorData= require('../model/authorData')

adminRouter.get("/",(req,res)=>{
    res.render('addbook',{
        nav:[{link:'/author' , name:'Author'},{link:'/books' , name:'Books'},{link:'/login', name:'Log Out'}]
    })

});
adminRouter.get("/add",(req,res)=>{
    
        res.render('addauthor',{
            nav:[{link:'/author' , name:'Author'},{link:'/books' , name:'Books'},{link:'/login', name:'Log Out'}]
        })
    
});
adminRouter.post('/add',upload.single('img'),(req,res)=>{
    var newImg = fs.readFileSync(req.file.path);
    var encImg = newImg.toString('base64');
    var item={
        title: req.body.title,
        author: req.body.author,
        gener: req.body.gen,
        contentType: req.file.mimetype,
        size: req.file.size,
        image: Buffer(encImg, 'base64')
      }

    var book=bookData(item);
    book.save();
    res.redirect("/books");

});
adminRouter.post('/addauthor',(req,res)=>{
    
    var item={
    author: req.body.author,
    title: req.body.title,
    gener: req.body.gen,
    image: req.body.img
    }
    var author=authorData(item);
    author.save();
    res.redirect("/author");
});
adminRouter.get('/remove/:id',(req,res)=>{
    const id=req.params.id
    bookData.deleteOne({_id: id})
    .then((books)=>{
        res.redirect('/books')
    })   
});
adminRouter.get('/removeauthor/:id',(req,res)=>{
    const id=req.params.id
    authorData.deleteOne({_id: id})
    .then(()=>{
        res.redirect('/author')
    })   
});
adminRouter.get('/editbooks/:id',(req,res)=>{
    const id=req.params.id
    bookData.findOne({_id: id})
    .then((book)=>{
        res.render('editbook',{
            nav:[{link:'/author' , name:'Author'},{link:'/books' , name:'Books'},{link:'/login', name:'Log Out'}]
        ,book});  
    });
});
adminRouter.get('/editauthor/:id',(req,res)=>{
    const id=req.params.id
    authorData.findOne({_id: id})
    .then((author)=>{
        res.render('editauthor',{
            nav:[{link:'/author' , name:'Author'},{link:'/books' , name:'Books'},{link:'/login', name:'Log Out'}]
        ,author});  
    });
});
adminRouter.post('/update',(req,res)=>{
     let id=req.body.id;
     console.log(id);
    let title= req.body.title;
    let author= req.body.author;
    let gener= req.body.gener;
    let image= req.body.image;
  
    if(image.length==0){
        var query= {_id: id};
        var valueUpdate = {$set: {'title': title,'author':author,'gener':gener,}};
        bookData.updateOne(query, valueUpdate
        , function (err, result) {
            if (err) {
                console.log("update document error");
            } else {
                 console.log("update document success");
                console.log(result);
            }

        });
         res.redirect("/books");
            
    }else{
        var querys= {_id: id};
        var valueUpdates = {$set: {'title': title,'author':author,'gener':gener,'image':image}};
        bookData.updateOne(querys, valueUpdates
        , function (err, result) {
            if (err) {
                console.log("update document error");
            } else {
                 console.log("update document success");
                console.log(result);
            }

        });
         res.redirect("/books");  
    }
});
adminRouter.post('/authorupdate',(req,res)=>{
    let id=req.body.id;
    console.log(id);
   let title= req.body.title;
   let author= req.body.author;
   let gener= req.body.gener;
   let image= req.body.image;

   if(image.length==0){
       var query= {_id: id};
       var valueUpdate = {$set: {'title': title,'author':author,'gener':gener}};
       authorData.updateOne(query, valueUpdate
       , function (err, result) {
           if (err) {
               console.log("update document error");
           } else {
                console.log("update document success");
               console.log(result);
           }

       });
        res.redirect("author");
           
   }else{
       var querys= {_id: id};
       var valueUpdates = {$set: {'title': title,'author':author,'gener':gener,'image':image}};
       authorData.updateOne(querys, valueUpdates
       , function (err, result) {
           if (err) {
               console.log("update document error");
           } else {
                console.log("update document success");
               console.log(result);
           }

       });
        res.redirect("/author");  
   }
});
module.exports=adminRouter;