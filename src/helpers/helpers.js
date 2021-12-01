import { PERSONAS_TYPES } from '../personasAction/personasAction.';

export const initialStateForm = {
    id: 0,
    nombres: '',
    apellidos: '',
};

export const functions = (
    stateForm,
    setStateForm,
    dispatch,
    stateAddEdit,
    setStateAddEdit,
    inputRef,
    setEmptyFields,
) => {
    //* Funcion para agregar una persona nueva o editada.
    const handleSubmit = (e) => {
        e.preventDefault();

        const { id, nombres, apellidos } = stateForm;

        if (nombres.length === 0 || apellidos.length === 0) {
            setEmptyFields(true);
            console.log(id, nombres, apellidos);
            return;
        } else setEmptyFields(false);

        const nuevaPersonaAdd = {
            id: new Date().getTime(),
            nombres,
            apellidos,
        };

        const nuevaPersonaEdit = {
            id,
            nombres,
            apellidos,
        };

        if (!stateAddEdit) {
            dispatch({
                type: PERSONAS_TYPES.ADD,
                payload: nuevaPersonaAdd,
            });
            setStateForm(initialStateForm);
        } else {
            dispatch({
                type: PERSONAS_TYPES.EDITAR,
                payload: nuevaPersonaEdit,
            });
            setStateForm(initialStateForm);
            setStateAddEdit(false);
        }

        inputRef.current.children[0].focus();
    };

    //* Funcion para eliminar una persona.
    const handleDelete = (idPersona) => {
        dispatch({ type: PERSONAS_TYPES.DELETE, payload: idPersona });
        setStateAddEdit(false);
        setStateForm(initialStateForm);
    };

    //* Funcion para comenzar a editar una persona.
    const handleEdit = (idPersona, nombres, apellidos) => {
        setStateForm({
            id: idPersona,
            nombres,
            apellidos,
        });

        setStateAddEdit(!stateAddEdit);

        inputRef.current.children[0].focus();
    };

    return { handleSubmit, handleDelete, handleEdit };
};
