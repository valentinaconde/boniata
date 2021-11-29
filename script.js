
let productos_destacados_html = document.getElementById('productos_destacados')

productos_destacados.forEach((producto, indice) => {

    productos_destacados_html.innerHTML += `
    <div class="card m-2 " id="producto${producto.id}" style="width: 18rem;">
    <img src="multimedia/producto${producto.id}.jpg" class="card-img-top imagen" alt="...">
        <div class="card-body card_productos">
        <p class="card-text nombre">${producto.nombre} - <strong>${producto.marca}</strong> </p>
        <p class="card-text descripcion">${producto.descripcion} </p>
        <p class="card-text precio">$${producto.precio} </p>
        <button type="button" class="btn">Agregar al carrito <i class="fas fa-shopping-basket"></i></button>
        </div>
    </div>
    `
})



let productos_nuevos_html = document.getElementById('productos_nuevos')

productos_nuevos.forEach((producto, indice) => {

    productos_nuevos_html.innerHTML += `
    <div class="card m-2 " id="producto${producto.id}" style="width: 18rem;">
    <img src="multimedia/producto${producto.id}.jpg" class="card-img-top imagen" alt="...">
        <div class="card-body card_productos">
        <p class="card-text nombre">${producto.nombre} - <strong>${producto.marca}</strong> </p>
        <p class="card-text descripcion">${producto.descripcion} </p>
        <p class="card-text precio">$${producto.precio} </p>
        <button type="button" class="btn">Agregar al carrito <i class="fas fa-shopping-basket"></i></button>
        </div>
    </div>
    `
})



let productos_ofertas_html = document.getElementById('productos_ofertas')

productos_ofertas.forEach((producto, indice) => {

    productos_ofertas_html.innerHTML += `
    <div class="card m-2" id="producto${producto.id}" style="width: 18rem;">
    <img src="multimedia/producto${producto.id}.jpg" class="card-img-top imagen" alt="...">
        <div class="card-body  card_productos">
        <p class="card-text nombre">${producto.nombre} - <strong>${producto.marca}</strong> </p>
        <p class="card-text descripcion">${producto.descripcion} </p>
        <p class="card-text precio">$${producto.precio} </p>
        <button type="button" class="btn">Agregar al carrito <i class="fas fa-shopping-basket"></i></button>
        </div>
    </div>
    `
})











// let productos = []
// var sigo = "SI"
// while(sigo == "SI"){
//     var nombre = prompt("Ingrese nombre del producto")
//     var marca = prompt("Ingrese marca del producto")
//     var precio = prompt("Ingrese precio del producto")
//     var producto = new Producto (nombre, precio, marca)
//     productos.push(producto)
//     console.log(productos)
//     var sigo = prompt("sigo? (SI/NO)")
// }