// Entradas del problema (comentario de linea)

/* 
esto es
un comentario
de bloque
*/

// ENTRADAS==VARIABLES==CONSTANTES

/*let nameproduct = "a"
let priceproduct = 5000
let pesoproduct = 0000
let haddiscount = true
let descriptionproduct= "lorem"
let phoneseller = "30000000"

const NAME_CLIENT = "ana"

//Arreglos unidimencionales(vectores)
//sirven para almacenar varios elementos en 1 sola variable
let products=["a","b","c","d"]
let products2=Array("a","b","c","d")

//SALIDAS 

console.log("buenas")
console.log(nameproduct)
console.log("su nombre es: "+NAME_CLIENT+"y su producto es: "+nameproduct)
console.log(`su nombre es: ${NAME_CLIENT} y su producto es: ${nameproduct}`)
console.log("*****")
console.log(products)
console.log(products2[0])*/

/*controlando etiquetas 

///1er paso crear una variable para guardar una etiqueta: para js una etiqueta es una referencia de memoria  
let etiquetatitulo = document.getElementById("titulo")
console.log(etiquetatitulo)

//2. como modificar el texto de una etiqueta
etiquetatitulo.textContent="lorem"


//controlando el menu
let etiquetanav = document.getElementById("titulonav")
                                                        
etiquetanav.textContent="Repostreria"

console.log(etiquetanav)

//controlando una foto
let etiquetafoto=document.getElementById("fotocinamon")
etiquetafoto.src="img/cinnamon-rolls.jpg"

//cambiar estilo de la etiqueta
etiquetatitulo.classList.add("text center")
*/

//Tienda se crean muchas variables y no es muy util, gasta mucha memoria se hace arreglo de cjas
/*let nombreProducto = "rollo de canela"
let precioProducto = 25000
let descripcionProducto = "lorem"

let nombreProducto2 = "pastel de arequipe"
let precioProducto2 = 2500
let descripcionProducto2 = "lorem"
*/

//Tienda
let productosNombre = ["Rollos de canela","Pastel de arequipe","Torta de banano"]
let productosPrecio =[15000,2500,25000]
let productosPromocion = [true,false]

console.log(productosNombre[1])

//creando objetos con js 
let usuario = {

    //atributo : valor
    nombre :"Bruno diaz",
    edad : 24,
    amigos : ["ron","marta","luis"]

}

console.log(usuario)
console.log(usuario.nombre)
console.log(usuario.amigos)
console.log(usuario.amigos[1])
