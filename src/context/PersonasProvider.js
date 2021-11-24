import { createContext, useReducer } from 'react';
import { functions, initialStateForm } from '../helpers/helpers';
import { useForm } from '../hooks/useForm';
import {
    initialStatePersonas,
    personasReducer,
} from '../personasReducer/personasReducer';

const PersonasContext = createContext();

const PersonasProvider = ({ children }) => {
    //* useReducer para manejar los estados y acciones:
    const [personas, dispatch] = useReducer(
        personasReducer,
        initialStatePersonas,
    );

    //* LLamando al customHook useForm para manejar los inputs:
    const { stateForm, setStateForm, handleInputChange } =
        useForm(initialStateForm);

    //* Separando funciones a archivo helper: handleSubmit y handleDelete:
    const { handleSubmit, handleDelete } = functions(
        stateForm,
        setStateForm,
        dispatch,
    );

    const data = {
        stateForm,
        handleInputChange,
        personas,
        handleSubmit,
        handleDelete,
    };

    return (
        <PersonasContext.Provider value={data}>
            {children}
        </PersonasContext.Provider>
    );
};

export { PersonasContext };
export default PersonasProvider;
