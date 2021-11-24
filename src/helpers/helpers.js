import { PERSONAS_TYPES } from '../personasAction/personasAction.';

export const initialStateForm = {
    id: 0,
    nombres: '',
    apellidos: '',
};

export const functions = (stateForm, setStateForm, dispatch) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const { nombres, apellidos } = stateForm;

        const nuevaPersona = {
            id: new Date().getTime(),
            nombres,
            apellidos,
        };

        console.log(nuevaPersona);

        dispatch({ type: PERSONAS_TYPES.ADD, payload: nuevaPersona });

        setStateForm(initialStateForm);
    };

    const handleDelete = (idPersona) => {
        dispatch({ type: PERSONAS_TYPES.DELETE, payload: idPersona });
    };

    return { handleSubmit, handleDelete };
};
