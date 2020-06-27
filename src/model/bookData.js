const mongoos=require('mongoose')

// mongoos.set('useNewUrlParser',true);
// mongoos.set('useFindAndModify',true)
// mongoos.set('useCreateIndex',true)
const multer = require("multer");
const path = require('path');
const GridFsStorage = require("multer-gridfs-storage");
var mongodb= 'mongodb://localhost:27017/Library';
// mongoos.set('useUnifiedTopology',true);
mongoos.connect(mongodb,{useNewUrlParser: true})

 const schema=mongoos.Schema;

 const bookSchema=new schema({
     title:String,
     author:String,
     gener:String,
     image:String
 });

 var Bookdata=mongoos.model('bookdata',bookSchema);
 module.exports=Bookdata;
