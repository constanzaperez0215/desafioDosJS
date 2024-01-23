const imgInicio = document.querySelector ('#imginicio')
let bordered = false

// borde rojo

imgInicio.addEventListener("click", function () {
    if(!bordered){
    imgInicio.style.border='2px solid red'
    bordered = true
    }else{
        imgInicio.style.border='none'
        bordered = false
    }
})