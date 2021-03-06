import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import { functions, initialStateForm } from '../helpers/helpers';
import { init } from '../helpers/init';
import { useForm } from '../hooks/useForm';
import { personasReducer } from '../personasReducer/personasReducer';

const PersonasContext = createContext();

const PersonasProvider = ({ children }) => {
    //? useRef para controlar focus en el input de nombres.
    const formRef = useRef();

    //? useReducer para manejar los estados y acciones.
    const [personas, dispatch] = useReducer(personasReducer, [], init);

    //? useEffect para guardar en el localstorage.
    useEffect(() => {
        localStorage.setItem('personas', JSON.stringify(personas));
    }, [personas]);

    //? useState para controlar si esta añadiendo o agregando una persona.
    const [stateAddEdit, setStateAddEdit] = useState(false);

    //? useState para controlar que no se pueda agregar persona con campos vacios del formulario.
    const [emptyFields, setEmptyFields] = useState(false);

    //? LLamando al customHook useForm para manejar los inputs.
    const { stateForm, setStateForm, handleInputChange } =
        useForm(initialStateForm);

    //? Separando funciones a archivo helper: handleSubmit y handleDelete.
    const { handleSubmit, handleDelete, handleEdit } = functions(
        stateForm,
        setStateForm,
        dispatch,
        stateAddEdit,
        setStateAddEdit,
        formRef,
        setEmptyFields,
    );

    //? la data para el context provider.
    const data = {
        stateForm,
        handleInputChange,
        personas,
        handleSubmit,
        handleDelete,
        handleEdit,
        formRef,
        emptyFields,
    };

    return (
        <PersonasContext.Provider value={data}>
            {children}
        </PersonasContext.Provider>
    );
};

export { PersonasContext };
export default PersonasProvider;
