import { productRequest } from "./products-requests.js";

const crearNuevoProducto = (imagen, categoria, nombre, precio, descripcion, id) => {
  const producto = document.createElement('div');
  producto.classList.add('producto')

  const contenido = 
      `<img class="producto__imagen" src="${imagen}" alt="">
      <i class="fa-solid fa-trash" id=${id}></i>
      <a href="editar-producto.html?id=${id}"><i class="fa-sharp fa-solid fa-pen"></i></a>
      <h3 class="producto__titulo">${nombre}</h3>
      <p class="producto__precio">${precio}</p>
      <p class="producto__descripcion">${descripcion}</p>`

  producto.innerHTML = contenido;
  const boton = producto.querySelector('i');
  boton.addEventListener('click', () => {
      const id = boton.id;
      productRequest
      .eliminarProducto(id)
      .then((response) => {
          response;
      })
      .catch((error) => {
          error;
      })
  })

  return producto;
}

const productos = document.querySelector('[data-product]');

productRequest.listarProductos().then((data) => {
  data.forEach(({imagen, categoria, nombre, precio, descripcion, id}) => {
    const nuevoProducto = crearNuevoProducto(imagen, categoria, nombre, precio, descripcion, id);
    productos.appendChild(nuevoProducto);
  });
}).catch((error) => error);