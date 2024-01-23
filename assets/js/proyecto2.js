const btn = document.querySelector("#btnP2")
const mensaje = document.querySelector("#mensaje")

btn.addEventListener("click",function () {
let n1 = Number(document.querySelector("#input1").value)
let n2 = Number(document.querySelector("#input2").value)
let n3 = Number(document.querySelector("#input3").value)

let suma = n1 + n2 + n3


if (suma == 0){
    mensaje.innerHTML = "Selecciona la cantidad"
}else if (suma <= 10){
    mensaje.innerHTML ="Llevas " + suma + " Stikers"
}
else{
    mensaje.innerHTML= "Deben ser menos de 10 Stikers"
}

})