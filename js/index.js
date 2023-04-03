var submit = document.getElementById("signup");
var user = document.getElementById("name");
var email =document.getElementById("email");
var password =document.getElementById("password");
var inEmail = document.getElementById("inEmail");
var inPassword =document.getElementById("inPassword");
var login =document.getElementById("login");
var accList=[];
var blackBox="";

if(localStorage.getItem("Account"))
{
accList = JSON.parse(localStorage.getItem("Account"));
}

if( submit){
    submit.addEventListener("click",function(){
        signUp();
    });
}else if(login){
    login.addEventListener("click",function(){
        validate();
    });
}else{
    
append();
document.getElementById("logout").addEventListener("click",function(){
    location.href="sign-in.html";
})
}


function signUp(){
    if(user.value=="" || email.value == "" || password.value == ""){
        document.getElementById("warning").classList.remove("d-none");
        document.getElementById("success").classList.add("d-none");

        return;
    }
        for(var i =0 ; i<accList.length ; i++){
            if(accList[i].email == email.value&& accList[i].password == password.value && accList[i].name == user.value){
                document.getElementById("exist").classList.remove("d-none");
                document.getElementById("success").classList.add("d-none");


                document
                return;
    
            }}
    

    document.getElementById("exist").classList.add("d-none");
    document.getElementById("warning").classList.add("d-none");
    document.getElementById("success").classList.remove("d-none");


    var account ={
        name: user.value ,
        email: email.value ,
        password: password.value,
    }
    accList.push(account);
    localStorage.setItem( "Account",JSON.stringify(accList));
    clear();
}



function validate(){
    if(inEmail.value =="" || inPassword.value == "" ){
        document.getElementById("inputWarning").classList.remove("d-none");
        return;
    }
    document.getElementById("inputWarning").classList.add("d-none");
    compare();
    
    
    
    
}

function compare (){
    for(var i =0 ; i<accList.length ; i++){
        if(accList[i].email == inEmail.value&& accList[i].password == inPassword.value){
            document.getElementById("incorrect").classList.add("d-none");
            localStorage.setItem("name",JSON.stringify(accList[i].name));
            
            location.href="Welcome.html";
            return;

        }else{
            document.getElementById("incorrect").classList.remove("d-none");
        }
    }
}

function append(){
    blackBox=JSON.parse( localStorage.getItem("name"));
    console.log(blackBox);
    document.getElementById("welcome").append(`${blackBox} `) ;

}

function clear(){
    user.value ="" ;
    email.value ="" ;
    password.value ="" ;
}