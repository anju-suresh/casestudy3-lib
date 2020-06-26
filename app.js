const express= require('express');

const app =express();

app.use(express.urlencoded({extended:true}))

const nav=[
    {
        link:'/' , name:'Home'
    },
    {
            link:'/login' , name:'Log In'
    },
    {
            link:'/signUp', name:'Sign Up'
    }
];

const logRouter=require('./src/routes/logRoutr')(nav)
const signRouter=require('./src/routes/signRouter')(nav)
const bookRouter=require('./src/routes/bookRouter')
const adminRouter=require('./src/routes/adminRouter')
const authorRouter=require('./src/routes/authorRouter')
// const addbookRouter=require('./src/routes/addbookRouter')
app.set("view engine","ejs");
app.set('views', './src/views/');
app.use(express.static('./public'));
app.use('/login',logRouter);
app.use('/signUp',signRouter);
app.use('/books',bookRouter);
app.use('/author',authorRouter);
app.use('/admin',adminRouter);

var article=[
    { 
        title: 'Web Design: A Key Factor for the Website Success',
        author:'www.medicalnewstoday.com',
        genr: 'May 11, 2019 ',
        img:"Carlos_Flavian2.jpg"
    },
    {
        title: '10 Highly Effective Web Design Tips Backed by Research',
        author:'www.torquemag.io',
        genr: 'July 17, 2018 ',
        img:"2.jpg"
    },
    {
        title: 'Your Guide to Using WebP Images On WordPress Sites',
        author:'www.torquemag.io',
        genr: 'May 19, 2020 ',
        img:"3.jpg"
    }
]

app.get('/', function(req,res){
    res.render("index",
    {
        nav,
        article
        
    });

});


app.listen(4050,()=>{
    console.log("Started...")
});