
const seleccion = document.querySelectorAll("button")

const carrito = document.getElementById("carrito")

const contador = document.getElementById("contador")

const listaArticulos = JSON.parse(localStorage.getItem("listaArticulos")) || []



carrito.addEventListener("click",function () {

    location.href = "carrito.html"
    
})
 

for (let index = 0; index < seleccion.length; index++) {
   
    seleccion[index].addEventListener("click", function () {


        alert("SE HA AGREGADO EXITOSAMENTE AL CARRITO")

        localStorage.setItem("listaArticulos", JSON.stringify(listaArticulos))||[]


        
        
    })
    
}