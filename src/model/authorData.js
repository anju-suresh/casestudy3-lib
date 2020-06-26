const mongoos=require('mongoose');
var mongodb= 'mongodb://localhost:27017/Library';
mongoos.connect(mongodb,{useNewUrlParser: true})
 
 const schema=mongoos.Schema;

 const authorSchema=new schema({
     author:String,
     title:String,
     gener:String,
     image:String
 });
 

 var Authordata=mongoos.model('authordata',authorSchema);
 module.exports=Authordata;
