import { PERSONAS_TYPES } from '../personasAction/personasAction.';

export const initialStateForm = {
    id: 0,
    nombres: '',
    apellidos: '',
};

export const functions = (formRef, stateForm, setStateForm, dispatch) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const { nombres, apellidos } = stateForm;

        const nuevaPersona = {
            id: new Date().getTime(),
            nombres,
            apellidos,
        };

        dispatch({ type: PERSONAS_TYPES.ADD, payload: nuevaPersona });

        setStateForm(initialStateForm);
    };

    const handleDelete = (idPersona) => {
        dispatch({ type: PERSONAS_TYPES.DELETE, payload: idPersona });
    };

    const handleEdit = (idPersona, nombres, apellidos) => {
        setStateForm({
            id: idPersona,
            nombres,
            apellidos,
        });
    };

    return { handleSubmit, handleDelete, handleEdit };
};
