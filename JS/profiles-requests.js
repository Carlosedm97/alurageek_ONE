const url = 'https://alurageek-api.onrender.com/perfil';

const validarPerfil = () => fetch(url).then((respuesta) => respuesta.json());

export const profileRequest = {
    validarPerfil,
}