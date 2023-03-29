const url = 'http://localhost:3000/producto'

const listarProductos = () => fetch(url).then((respuesta) => respuesta.json());

const crearProducto = (imagen, categoria, nombre, precio, descripcion) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imagen, categoria, nombre, precio, descripcion, id: uuid.v4()
        })
    })
};

export const productRequest = {
    listarProductos,
    crearProducto,
};