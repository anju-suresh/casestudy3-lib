function emailValidate(){
    var email = document.getElementById("email");
    var pass = document.getElementById("password");
    var regexp=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if(!regexp.test(email.value)){
        document.getElementById("first").innerHTML="Email is not valid";
        document.getElementById("first").style.color="red";
        email.style.border= "1px dotted red";
        return false;
    }else {
        document.getElementById("first").innerHTML="Email is valid";
        document.getElementById("first").style.color="green";
        email.style.border= "1px solid #ebebeb";
        return true;
    }
}
function passwordValidate(){

var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
var enoughRegex = new RegExp("(?=.{6,}).*", "g");
var pwd = document.getElementById("password");
if (pwd.value.length==0) {
    document.getElementById("two").innerHTML = "Type Password";
    document.getElementById("progress").style.width="5%";
    document.getElementById("progress").style.backgroundColor="grey";
    password.style.border="1px solid grey";
}else if(pwd.value.length<=8){
    document.getElementById("two").innerHTML = "password is too short";
    document.getElementById("progress").style.width="15%";
    document.getElementById("progress").style.backgroundColor="lightblue";
    password.style.border="1px solid lightblue";
}else if (false == enoughRegex.test(pwd.value)) {
    document.getElementById("two").innerHTML = "More Characters";
    document.getElementById("progress").style.width="25%";
    document.getElementById("progress").style.backgroundColor="yellow";
    password.style.border="1px solid yellow";
} else if (strongRegex.test(pwd.value)) {
    document.getElementById("two").innerHTML = "<span style='color:green'>Strong!</span>";
    document.getElementById("progress").style.width="100%";
    document.getElementById("progress").style.backgroundColor="green";
    password.style.border="1px solid #ebebeb";
} else if (mediumRegex.test(pwd.value)) {
    document.getElementById("two").innerHTML = "<span style='color:orange'>Medium!</span>";
    document.getElementById("progress").style.width="70%";
    document.getElementById("progress").style.backgroundColor="orange";
    password.style.border="1px solid orange";
} else { 
    document.getElementById("two").innerHTML ="<span style='color:red'>Weak!</span>";
    document.getElementById("progress").style.width="40%";
    document.getElementById("progress").style.backgroundColor="red";
    password.style.border="1px solid red";
}
}

function submitFun(){
    var email = document.getElementById("email");
    var pass = document.getElementById("password");
    var numb=document.getElementById("num");
    var confm=document.getElementById("re_password");
    var name=document.getElementById("name");
    var dist=document.getElementById("districts");
    var state=document.getElementById("state");
    var country=document.getElementById("Country");
    var adres=document.getElementById("address");
    var dat=document.getElementById("dat");
    var fema=document.getElementById("female");
    var mal=document.getElementById("male");
    var trans=document.getElementById("trans");
    if(((name.value.trim()=="")&&(dat.value.trim()=="")&&(dist.value.trim()=="")&&(state.value.trim()=="")&&(country.value.trim()=="")&&(adres.value.trim()==""))&&(email.value.trim()=="")&&(pass.value.trim()=="")&&(numb.value.trim()=="")&&(confm.value.trim()=="")){
            document.getElementById("main").innerHTML=" * Fields cannot be empty";
            document.getElementById("main").style.color="red";
            email.style.border= "1px dotted red";
            num.style.border= "1px dotted red"; 
            password.style.border= "1px dotted red"; 
            re_password.style.border= "1px dotted red";
            name.style.border="1px dotted red";
            dist.style.border="1px dotted red";
            state.style.border="1px dotted red";
            Country.style.border="1px dotted red";
            address.style.border="1px dotted red";
            dat.style.border= "1px dotted red";
            return false;
    } else if(name.value.trim()==""){ 
        name.focus();
        document.getElementById("four").innerHTML="*Please enter your Name";
        document.getElementById("four").style.color="red";
        name.style.border= "1px dotted red";
       return false;
    }else if(dat.value.trim()==""){
        document.getElementById("da").innerHTML="*Please enter your DOB";
        document.getElementById("da").style.color="red";
        dat.style.border= "1px dotted red";
        dat.focus();
        return false;
    }
    else if(adres.value.trim()==""){
        document.getElementById("ad").innerHTML="*Please enter your Address";
        document.getElementById("ad").style.color="red";
        adres.style.border= "1px dotted red";
        adres.focus();
        return false;
    }else if(dist.value =="Your District*"){
       
            //If the "Please Select" option is selected display error.
        // alert("Please select an option!");
        document.getElementById("five").innerHTML="*Please enter your District";
        document.getElementById("five").style.color="red";
        dist.style.border= "1px dotted red";
        return false;
    }else if((fema.checked==false)&&(mal.checked==false)&&(trans.checked==false)){
    fema.focus();
    document.getElementById("rad").innerHTML="*Please enter your gender";
    document.getElementById("rad").style.color="red";
    fema.style.border= "1px dotted red";
    mal.style.border= "1px dotted red";
    trans.style.border= "1px dotted red";
    return false;
}else if(state.value.trim()==""){
    state.focus();
    document.getElementById("six").innerHTML="*Please enter your state";
    document.getElementById("six").style.color="red";
    state.style.border= "1px dotted red";
    return false;
}else if(country.value.trim()==""){
    country.focus();
    document.getElementById("seven").innerHTML="*Please enter your country";
    document.getElementById("seven").style.color="red";
    country.style.border= "1px dotted red";
    return false;   
}else if(numb.value.trim()==""){
        numb.focus();
        document.getElementById("ph").innerHTML="*Please fill a valid phone number";
       document.getElementById("ph").style.color="red";
       num.style.border= "1px dotted red"; 
       return false;
    }else  if(email.value.trim()==""){
        email.focus();
        document.getElementById("first").innerHTML="*Email cannot be empty";
        document.getElementById("first").style.color="red";
        email.style.border= "1px dotted red";
        return false;
    }else  if(pass.value.trim()==""){
        pass.focus();
        document.getElementById("two").innerHTML="*Password cannot be empty";
        document.getElementById("two").style.color="red";
        password.style.border= "1px dotted red";
        return false;
        
    }else  if(confm.value.trim()==""){
        confm.focus();
        document.getElementById("alert").innerHTML="*Please Re-enter the Password";
        document.getElementById("alert").style.color="red";
        re_password.style.border= "1px dotted red";
        return false;
        
    }else{
        document.getElementById("main").innerHTML=" ";
        document.getElementById("first").innerHTML=" ";
        document.getElementById("two").innerHTML=" ";
        document.getElementById("ph").innerHTML=" ";
        document.getElementById("ad").innerHTML=" ";
        document.getElementById("four").innerHTML=" ";
        document.getElementById("da").innerHTML=" ";
       
        dat.style.border= "1px dotted #ebebeb";
        name.style.border= "1px dotted #ebebeb";
        adres.style.border= "1px dotted #ebebeb";
        num.style.border= "1px solid #ebebeb"; 
        email.style.border= "1px solid #ebebeb";  
        pass.style.border= "1px solid #ebebeb";  
        re_password.style.border= "1px solid #ebebeb";
        districts.style.border="1px dotted #ebebeb";
        state.style.border="1px dotted #ebebeb";
        Country.style.border="1px dotted #ebebeb";
	    return true;
    }
}

function phonenumber()
{
    var numb=document.getElementById("num");
    
    if(numb.value.trim()=="")
     {
        document.getElementById("ph").innerHTML="*Please fill a valid phone number";
        document.getElementById("ph").style.color="red";
        num.style.border= "1px dotted red"; 
        return false; 
	 }
   else
     {
	    document.getElementById("ph").innerHTML=" ";
        num.style.border= "1px dotted #ebebeb";  
	    return true;
     }
}

function check(){
    var passwd=document.getElementById("password").value;
    var confm=document.getElementById("re_password").value;
    if(passwd!=confm){
        document.getElementById("alert").innerHTML="*Those passwords didn't match Try again";
        document.getElementById("alert").style.color="red";
        document.getElementById("password").innerHTML="";
        document.getElementById("re_password").innerHTML="";
        return false;

    }else{
        document.getElementById("alert").innerHTML="";
        password.style.border= "1px dotted #ebebeb"; 
        re_password.style.border= "1px dotted #ebebeb"; 
        return true;
    }
}

function submitFun1(){
    var email = document.getElementById("email");
    var pass = document.getElementById("password");
    
    if((email.value.trim()=="")&&(pass.value.trim()=="")){
            document.getElementById("main").innerHTML=" *Fields cannot be empty";
            document.getElementById("main").style.color="red";
            email.style.border= "1px dotted red";
            pass.style.border= "1px dotted red";
            return false;
    }else  if(email.value.trim()==""){
        document.getElementById("first").innerHTML="*Email cannot be empty";
        document.getElementById("first").style.color="red";
        email.style.border= "1px dotted red";
        return false;
    }else  if(pass.value.trim()==""){
        document.getElementById("two").innerHTML="*Password cannot be empty";
        document.getElementById("two").style.color="red";
        password.style.border= "1px dotted red";
        return false;
    }else{
        document.getElementById("main").innerHTML=" ";
        document.getElementById("first").innerHTML=" ";
        document.getElementById("two").innerHTML=" ";
        email.style.border= "1px solid #ebebeb";  
        pass.style.border= "1px solid #ebebeb";  
	    return true;
    }

}
function valid(){
    var dists=document.getElementById("districts");
    var addr=document.getElementById("address");
    var dat=document.getElementById("dat");
    var fema=document.getElementById("female");
    var mal=document.getElementById("male");
    var trans=document.getElementById("trans");
    
    
    if(dists.value!="Your District*"){
        document.getElementById("five").innerHTML=" ";
        dists.style.border= "1px solid #ebebeb";

    }if(addr.value.trim()!=""){
        document.getElementById("ad").innerHTML=" ";
        addr.style.border= "1px solid #ebebeb"; 
    }if(dat.value.trim()!=""){
        document.getElementById("da").innerHTML=" ";
        dat.style.border= "1px solid #ebebeb"; 
    }if((fema.checked==false)&&(mal.checked==false)&&(trans.checked==false)){
        document.getElementById("rad").innerHTML=" ";
        fema.style.border= "1px solid #ebebeb"; 
        mal.style.border= "1px solid #ebebeb"; 
        trans.style.border= "1px solid #ebebeb"; 

    }
    return true;
     
}
function nameVal(){
    var nam=document.getElementById("name");
    var regex = /^[a-zA-Z]+$/;
    if(regex.test(nam.value) == false){
        document.getElementById("four").innerHTML="*Name must be in alphabets only";
        document.getElementById("four").style.color="red";
        nam.style.border= "1px dotted red";
        nam.focus();
        return false;
    }
    else{
      document.getElementById("four").innerHTML=" ";
      nam.style.border= "1px dotted #ebebeb";
      return true;
    }
   
}
function stateVal(){
    var state=document.getElementById("state");
    var country=document.getElementById("Country");
    var regex = /^[a-zA-Z]+$/;
    if(regex.test(state.value) == false){
        state.focus();
        document.getElementById("six").innerHTML="*State must be in alphabets only";
        document.getElementById("six").style.color="red";
        state.style.border= "1px dotted red";
       
        return false;
    }
    else{
      document.getElementById("six").innerHTML=" ";
      state.style.border= "1px dotted #ebebeb";
      return false;
    }

    return true;
}
function countryVal(){
    var country=document.getElementById("Country");
    var regex = /^[a-zA-Z]+$/;
    if(regex.test(country.value) == false){
        country.focus();
        document.getElementById("seven").innerHTML="*Country must be in alphabets only";
        document.getElementById("seven").style.color="red";
        country.style.border= "1px dotted red";
        return false;
    }else{
        document.getElementById("seven").innerHTML=" ";
        country.style.border= "1px dotted #ebebeb";
        return false;
        
    }

    return true;

}
function drop(){
    let optionsLength = document.getElementById("selectId").length;

if(optionsLength > 0){

alert("The Length is : "+optionsLength);

}

if(optionsLength == 0){

alert("There are no options ");

}
}