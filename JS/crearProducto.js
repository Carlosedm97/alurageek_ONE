import { productRequest } from '../JS/products-requests.js';

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (event) => {
    console.log('entré aquí')
    event.preventDefault();
    const imagen = document.querySelector('[data-imagen]').value;
    const categoria = document.querySelector('[data-categoria]').value;
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;

    console.log(imagen, categoria, nombre, precio, descripcion);

    productRequest
    .crearProducto(imagen, categoria, nombre, precio, descripcion)
    .then(() => {
        window.location.href = '/productos.html';
    })
    .catch((error) => console.log(error));
})