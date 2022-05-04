
export function llenarTienda(){
    //creando una arreglo de objetos
let productosBD = [

    {foto: 'img/cinnamon-rolls.jpg', nombre : "rollos de canela",precio:20000,descripcion:"Deliciosos rollos de canela"},
    {foto: 'img/pastelarequipe1.jpg', nombre : "Pastel de arequipe", precio : 2500, descripcion: "Pastel de arequipe recien hecho" },
    {foto: 'img/Banano1.jpg', nombre : "Torta de banano", precio : 30000, descripcion: "Pastel de banano 100% artesanal"},
    {foto: 'img/chessecake1.jpg', nombre : "Chessecake", precio:28000, descripcion: " lorem "},
    {foto: 'img/alfajores1.jpg', nombre : "Alfajores", precio:8000,descripcion: " lorem "},
    {foto: 'img/zanahoria1.jpg', nombre : "Torta de zanahoria", precio:30000,descripcion: " lorem "},
    {foto: 'img/manzana1.jpg', nombre : "Pie de manzana", precio:28000,descripcion: " lorem "},
    {foto: 'img/tresleches1.jpg', nombre : "Torta de 3 leches", precio:32000,descripcion: " lorem "},
    {foto: 'img/galletasmantequilla1.jpg', nombre : "Galletas de mantequilla", precio:5000,descripcion: " lorem "},
    {foto: 'img/profiteroles.jpg', nombre : "Profiteroles", precio:5000,descripcion: " lorem "},

]

//Necesito recorrer un arreglo en JS

//1. Creo una variable para almacenar la base sobre la cual voy a pintar
let fila=document.getElementById("fila")
  
productosBD.forEach(function(producto){
    console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.foto)

    //Pintando etiquetas

    //div con la clase col (solo con etiquetas)
    let columna=document.createElement("div")
    columna.classList.add("col")

    //div con las clases card h-100
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")
    tarjeta.classList.add("my-10px")

    //img con la clase card-img-top
    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src=producto.foto

    //h4 con la clase text-center
    let titulo=document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent=producto.nombre

    //precio
    let precio=document.createElement("h2")
    precio.classList.add("text-center")
    precio.textContent=producto.precio

    //comprar 

    let comprar=document.createElement("button")
    comprar.setAttribute("type","button")
    comprar.classList.add("btn","btn-success","mx-4","mb-4")
    comprar.textContent="comprar"


    //3. padres e hijos
    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(comprar)

    columna.appendChild(tarjeta)
    filas.appendChild(columna)
    
})


}





/*console.log(productosBD)

//como recorrer un arreglo con js 

//1. tener un arreglo 

productos.forEach(function(producto){
    console.log(producto.nombre)
})*/