import { createContext, useReducer, useRef } from 'react';
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

    //? LLamando al customHook useForm para manejar los inputs:
    const { stateForm, setStateForm, handleInputChange } = useForm(
        initialStateForm,
        formRef,
    );

    //? Separando funciones a archivo helper: handleSubmit y handleDelete:
    const { handleSubmit, handleDelete, handleEdit } = functions(
        formRef,
        stateForm,
        setStateForm,
        dispatch,
    );

    //? la data para el context provider:
    const data = {
        formRef,
        stateForm,
        handleInputChange,
        personas,
        handleSubmit,
        handleDelete,
        handleEdit,
    };

    return (
        <PersonasContext.Provider value={data}>
            {children}
        </PersonasContext.Provider>
    );
};

export { PersonasContext };
export default PersonasProvider;
