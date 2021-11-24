import { createContext, useReducer } from 'react';
import { initialStateForm } from '../helpers/helpers';
import { useForm } from '../hooks/useForm';
import {
    initialStatePersonas,
    personasReducer,
} from '../personasReducer/personasReducer';
import { PERSONAS_TYPES } from '../personasAction/personasAction.';

const PersonasContext = createContext();

const PersonasProvider = ({ children }) => {
    //* useReducer para manejar los estados y acciones:
    const [personas, dispatch] = useReducer(
        personasReducer,
        initialStatePersonas,
    );

    const { stateForm, setStateForm, handleInputChange } =
        useForm(initialStateForm);
    const { nombres, apellidos } = stateForm;

    const handleSubmit = (e) => {
        e.preventDefault();

        const nuevaPersona = {
            id: new Date().getTime(),
            nombres,
            apellidos,
        };

        dispatch({ type: PERSONAS_TYPES.ADD, payload: nuevaPersona });

        setStateForm(initialStateForm);
    };

    const handleDelete = () => {};

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
