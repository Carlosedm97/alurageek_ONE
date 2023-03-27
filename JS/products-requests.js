const url = 'http://localhost:3000/producto'

const listarProductos = () => fetch(url).then((respuesta) => respuesta.json());

export const productRequest = {
    listarProductos,
}