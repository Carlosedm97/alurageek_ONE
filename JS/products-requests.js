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

const eliminarProducto = (id) => {
    return fetch(url+ '/' + id, {
        method: 'DELETE'
    })
}

const detallesProducto = (id) => {
    return fetch(url+ '/' + id).then((respuesta) => respuesta.json())
};

const actualizarProducto = (imagen, categoria, nombre, precio, descripcion, id) => {
    return fetch(url+ '/' +id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imagen, categoria, nombre, precio, descripcion
        })
    })
    .then((response) => {
        response;
    })
    .catch((error) => {
        error;
    })
}

export const productRequest = {
    listarProductos,
    crearProducto,
    eliminarProducto,
    detallesProducto,
    actualizarProducto
};