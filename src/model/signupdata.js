const mongoos=require('mongoose');
var mongodb= 'mongodb://localhost:27017/Library';
mongoos.connect(mongodb,{useNewUrlParser: true})
 
 const schema=mongoos.Schema;

 const signupSchema=new schema({
     type:String,
     name:String,
     email:String,
     password:String,
 });
 
 var signupdata=mongoos.model('signupdata',signupSchema);
 module.exports=signupdata;