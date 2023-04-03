import { productRequest } from "./products-requests.js";

const form = document.querySelector('[data-form]');

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = (url.searchParams.get('id'));

    if(id === null) {
        alert('Ocurrió un error.')
        window.location.href = '/productos.html';
    }

    const imagen = document.querySelector('[data-imagen]');
    const categoria = document.querySelector('[data-categoria]');
    const nombre = document.querySelector('[data-nombre]');
    const precio = document.querySelector('[data-precio]');
    const descripcion = document.querySelector('[data-descripcion]');

    try {
        const producto = await productRequest.detallesProducto(id);
        if (producto.imagen
            && producto.categoria
            && producto.nombre
            && producto.precio
            && producto.descripcion) {
                console.log('Estoy aqui y estoy probando esto: ', producto.imagen);
                imagen.value = producto.imagen;
                categoria.value = producto.categoria;
                nombre.value = producto.nombre;
                precio.value = producto.precio;
                descripcion.value = producto.descripcion;
            } else {
                throw new Erorr();
            }
    } catch (error) {
        alert('Ocurrio un error.')
    }
};

obtenerInformacion();

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const url = new URL(window.location);
    const id = (url.searchParams.get('id'));
    
    const imagen = document.querySelector('[data-imagen]').value;
    const categoria = document.querySelector('[data-categoria]').value;
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;

    productRequest.actualizarProducto(imagen, categoria, nombre, precio, descripcion, id).then(() =>{
        window.location.href = '/productos-admin.html';
    })
})