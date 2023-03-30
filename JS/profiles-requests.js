const url = 'http://localhost:3000/perfil';

const validarPerfil = () => fetch(url).then((respuesta) => respuesta.json());

export const profileRequest = {
    validarPerfil,
}