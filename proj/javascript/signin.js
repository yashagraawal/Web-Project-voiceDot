let id = document.getElementById("id");
let pass = document.getElementById("pass");
let newid = document.getElementById("newid");
let newpass = document.getElementById("newpass");
let cnewpass = document.getElementById("cnewpass");
let msg = document.getElementById("msg");
let success = document.getElementById("success");

let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

function register(){
    let newid2 = newid.value;
    let newpass2 = newpass.value;
    let cnewpass2 = cnewpass.value;
    
    if(newid2=='' || newpass2=='' || cnewpass2==''){
        msg.innerHTML = "Empty field not allowed";
    }
    else if(newid2.includes(' ') || newpass2.includes(' ') || cnewpass2.includes(' ')){
        msg.innerHTML = "Spaces not allowed";
    }
    else if (regExp.test(newpass2)==false) {
        msg.innerHTML = "password should be alphanumeric";
    }
    else if (newpass2<4 || newpass2>8) {
        msg.innerHTML = "password should be minimum 4 & maximum 8 digit"
    }
    else if (newpass2 != cnewpass2) {
        msg.innerHTML = "Both passwords are not matching";
    }
    else{
        window.open("../proj/success.html");
        msg.innerHTML = "";
    }
}

function login(){
    let id1 = id.value;
    let pass1 = pass.value;

    if(id1=='' || pass1==''){
        msg.innerHTML = "Empty field not allowed";
    }
    else if(id1=="yash" && pass1=="admin"){
        window.open("../proj/success.html");
        msg.innerHTML = "";
    }
    else{
        msg.innerHTML = "Login failed";
    }
}

$(function(){
    let chk = $('#check');
    chk.change(function () { 
        if(chk.prop('checked')==true){
            $('#pass').attr('type','text');
            $('#newpass').attr('type','text');
            $('#cnewpass').attr('type','text');
        }else{
            $('#pass').attr('type','password');
            $('#newpass').attr('type','password');
            $('#cnewpass').attr('type','password');
        }
    });
});