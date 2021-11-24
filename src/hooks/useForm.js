import { useState } from 'react';

export const useForm = (initialState = {}) => {
    //* useState para controlar el formulario:
    const [stateForm, setStateForm] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setStateForm({
            ...stateForm,
            [target.name]: target.value,
        });
    };

    return { stateForm, setStateForm, handleInputChange };
};
