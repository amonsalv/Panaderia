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
        ampliarInformacionProducto(evento)
        modalinfo.show()
    }
})

//rutina par ael anadir a la cesta 
let carrito=[]

let botonAgregarCarrito=document.getElementById("botonadd")
botonAgregarCarrito.addEventListener("click",function(){})
