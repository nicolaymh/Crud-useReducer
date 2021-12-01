import { createContext, useReducer, useRef, useState } from 'react';
import { functions, initialStateForm } from '../helpers/helpers';
import { useForm } from '../hooks/useForm';
import {
    initialStatePersonas,
    personasReducer,
} from '../personasReducer/personasReducer';

const PersonasContext = createContext();

const PersonasProvider = ({ children }) => {
    const formRef = useRef();

    //? useReducer para manejar los estados y acciones:
    const [personas, dispatch] = useReducer(
        personasReducer,
        initialStatePersonas,
    );

    //? useState para controlar si esta añadiendo o agregando una persona
    const [stateAddEdit, setStateAddEdit] = useState(false);

    //? useState para controlar que no se pueda agregar persona con campos vacios del formulario.
    const [emptyFields, setEmptyFields] = useState(false);

    //? LLamando al customHook useForm para manejar los inputs:
    const { stateForm, setStateForm, handleInputChange } =
        useForm(initialStateForm);

    //? Separando funciones a archivo helper: handleSubmit y handleDelete:
    const { handleSubmit, handleDelete, handleEdit } = functions(
        stateForm,
        setStateForm,
        dispatch,
        stateAddEdit,
        setStateAddEdit,
        formRef,
        emptyFields,
        setEmptyFields,
    );

    //? la data para el context provider:
    const data = {
        stateForm,
        handleInputChange,
        personas,
        handleSubmit,
        handleDelete,
        handleEdit,
        formRef,
    };

    return (
        <PersonasContext.Provider value={data}>
            {children}
        </PersonasContext.Provider>
    );
};

export { PersonasContext };
export default PersonasProvider;
