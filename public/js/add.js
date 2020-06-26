var arr=new Array();
function add(){
var myTitle = document.getElementById("title");
var myAuthor = document.getElementById("author");
var mygen = document.getElementById("gen");
var myImg = document.getElementById("img");
console.log(myTitle.value);
console.log(myAuthor.value);
console.log(mygen.value)
console.log(myImg.value);
arr={title:myTitle.value,author:myAuthor.value,genr:mygen.value,img:myImg.value}

console.log(arr);
}