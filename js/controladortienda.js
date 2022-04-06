import {llenarTienda} from './llenadotienda.js'
import {ampliarInformacionProducto} from './amplianinfo.js'

//creo un producto vacio en el controlador 
let producto={}

//llamando a tienda llenado
llenarTienda()

// rutina para ampliar informacion
let contenedorTienda=document.getElementById("filas")
contenedorTienda.addEventListener("click",function(evento){

    if(evento.target.classList.contains("btn")){
        let modalinfo = new bootstrap.Modal(document.getElementById('modalinfor'))
        producto=ampliarInformacionProducto(evento)
        console.log(producto)
        modalinfo.show()
    }
})

//rutina par ael anadir a la cesta 
let carrito=[]

let botonAgregarCarrito=document.getElementById("botonadd")
botonAgregarCarrito.addEventListener("click",function(){

    //Debo capturar la cantidad y agregarla al producto 
    let cantidad=document.getElementById("cantidadProducto").value
    producto.cantidad=cantidad

    //agrego el producto al carrito
    carrito.push(producto)

    //pintar la capsula en el  carrito
    let suma=0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
    })

    let capsula=document.getElementById("capsula")
    capsula.textContent=suma;
    capsula.classList.remove("invisible")


    carrito.push(producto)
    console.log(carrito)
    
})

let btndelete= document.getElementById("btndelete")
btndelete.addEventListener("click",function(){

    carrito=[]
    let capsula=document.getElementById("pildora")
    let capsula.classList.add("invisible")
})

//rutina para ver el carrito

