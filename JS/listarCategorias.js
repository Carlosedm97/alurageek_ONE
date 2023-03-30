import { productRequest } from "./products-requests.js";

const mostrarProducto = (imagen, categoria, nombre, precio, descripcion) => {
    const producto = document.createElement('div');
    producto.classList.add('producto');

    const contenido = `
            <img class="producto__imagen" src="${imagen}" alt="">
            <h3 class="producto__titulo">${nombre}</h3>
            <p class="producto__precio">${precio}</p>
            <a href="#" class="info__producto">Ver producto</a>
    `

    producto.innerHTML = contenido;

    return producto;
}

const starwars = document.querySelector('[data-starwars]');

productRequest.listarProductos().then((data) => {
    const categoria = 'Star Wars';
    const productos = data.filter(producto => producto.categoria === categoria);

    const primerosProductos = productos.slice(0, 6);
    primerosProductos.forEach(producto => {
        const nuevoProducto = mostrarProducto(producto.imagen, producto.categoria, producto.nombre, producto.precio, producto.descripcion);
        starwars.appendChild(nuevoProducto);
    })
}).catch((error) => error);