import { productRequest } from "./products-requests.js";

const crearNuevoProducto = (imagen, categoria, nombre, precio, descripcion) => {
  const producto = document.createElement('div');
  producto.classList.add('producto')

  const contenido = `
      <div class="imagen__container">
        <img class="producto__imagen" src="${imagen}" alt="">
        <i class="fa-solid fa-trash"><a href="#"></a></i>
        <i class="fa-sharp fa-solid fa-pen"><a href="#"></a></i>
      </div>
      <h3 class="producto__titulo">${nombre}</h3>
      <p class="producto__precio">${precio}</p>
      <p class="producto__descripcion">${descripcion}</p>`

  producto.innerHTML = contenido;

  return producto;
}

const productos = document.querySelector('[data-product]');

productRequest.listarProductos().then((data) => {
  data.forEach(({imagen, categoria, nombre, precio, descripcion}) => {
    const nuevoProducto = crearNuevoProducto(imagen, categoria, nombre, precio, descripcion);
    productos.appendChild(nuevoProducto);
  });
}).catch((error) => error);