import { useState } from 'react';

export const useForm = (initialState = {}) => {
    //* useState para controlar el formulario:
    const [stateForm, setStateForm] = useState(initialState);

    //* Funcion para controlar los campos del formulario
    const handleInputChange = ({ target }) => {
        setStateForm({
            ...stateForm,
            [target.name]: target.value,
        });
    };

    return { stateForm, setStateForm, handleInputChange };
};
