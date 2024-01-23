const btn = document.querySelector("#btn")
const msj = document.querySelector("#mensaje")



btn.addEventListener("click", function () {
    const pass1= document.querySelector("#password1").value
    const pass2= document.querySelector("#password2").value
    const pass3= document.querySelector("#password3").value

resultado = pass1 + pass2 + pass3

if (resultado == 911){
    msj.innerHTML = "Password 1 correcto"
} else if(resultado == 714){
    msj.innerHTML = "Password 2 correcto"
} else{
    msj.innerHTML = "Password incorrecto"
}

})