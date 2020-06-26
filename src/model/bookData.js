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
     contentType: String,
     size: Number,
     image:Buffer
 });

//  const storage = multer.diskStorage({
//     destination: './public/css/image',
//     filename: function(req, file, cb){
//       cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
//   });
//   const upload = multer({
//     storage: storage,
//     limits:{fileSize: 1000000},
//     fileFilter: function(req, file, cb){
//       checkFileType(file, cb);
//     }
//   }).single('image');
//   function checkFileType(file, cb){
//     // Allowed ext
//     const filetypes = /jpeg|jpg|png|gif/;
//     // Check ext
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     // Check mime
//     const mimetype = filetypes.test(file.mimetype);
  
//     if(mimetype && extname){
//       return cb(null,true);
//     } else {
//       cb('Error: Images Only!');
//     }
//   }
 
// //  var storage = new GridFsStorage({
// //     url: "mongodb://localhost:27017/bezkoder_files_db",
// //     options: { useNewUrlParser: true, useUnifiedTopology: true },
// //     file: (req, file) => {
// //       const match = ["image/png", "image/jpeg"];
  
// //       if (match.indexOf(file.mimetype) === -1) {
// //         const filename = `${Date.now()}-bezkoder-${file.originalname}`;
// //         return filename;
// //       }
  
// //       return {
// //         bucketName: "photos",
// //         filename: `${Date.now()}-bezkoder-${file.originalname}`
// //       };
// //     }
// //   });
  
 var Bookdata=mongoos.model('bookdata',bookSchema);
 module.exports=Bookdata;
