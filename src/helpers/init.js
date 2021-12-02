//? init del reducer para obtener los datos del localStorage.
export const init = () => {
    return JSON.parse(localStorage.getItem('personas')) || [];
};
