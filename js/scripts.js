var sliderElement = document.querySelector("#slider");
var buttomElement = document.querySelector("#buttom");

var sizePassword = document.querySelector("#valor");
var password = document.querySelector("#password");

var containerPassword = document.querySelector("#container-password");

var charset = "abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@"
var newPassword = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sliderElement.innerHTML = this.value;
}

function generatePassword(){
    var pass = "";
    for(let i =0, n = charset.length; i < sliderElement.value ; i++){
        pass += charset.charAt(Math.floor(Math.random()*n));
    }

    console.log(pass)
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso")
    navigator.clipboard.writeText(newPassword);
}
