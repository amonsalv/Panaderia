

export function ampliarInformacionProducto (evento){
    
    let producto={}

    //lleno la informacion del producto
    producto.foto=evento.target.parentElement.querySelector("img").src
    producto.nombre=evento.target.parentElement.querySelector("h4").textContent

    let fotoinfo=document.getElementById("fotoinfo")
    fotoinfo.src= evento.target.parentElement.querySelector("img").src

    let titulofoto=document.getElementById("nombreinfo")
    titulofoto.textContent=evento.target.parentElement.querySelector("h4").textContent
    titulofoto.classList.add("text-dark")

    
   /*this shit doesn't work 
   let descripcioncinfo=document.getElementById("descripcioninfo")
    descripcioncinfo.textContent=evento.target.parentElement.querySelector("p").textContent
    descripcioncinfo.classList.add("text-dark")*/

    let precioinfo=document.getElementById("precioinfo")
    console.log(evento.target.parentElement)
    precioinfo.textContent=evento.target.parentElement.querySelector("h2").textContent
    precioinfo.classList.add("text-warning")

    //devolver el producto generado
    return producto

}

     
    

          //console.log(evento.target.parentElement.querySelector("h4"))


        