import { useReducer, useState } from 'react';
import {
    initialStateForm,
    PERSONAS_TYPES,
} from './personasAction/personasAction.';
import {
    initialStatePersonas,
    personasReducer,
} from './personasReducer/personasReducer';
import './styles/App.css';

const App = () => {
    const [personas, dispatch] = useReducer(
        personasReducer,
        initialStatePersonas,
    );

    const [stateForm, setStateForm] = useState(initialStateForm);
    const { nombres, apellidos } = stateForm;

    const handleInputChange = ({ target }) => {
        setStateForm({
            ...stateForm,
            [target.name]: target.value,
        });
    };
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

    return (
        <div>
            <h1>Agregar Persona</h1>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    className=''
                    type='text'
                    placeholder='nombres'
                    autoComplete='off'
                    name='nombres'
                    value={nombres}
                    onChange={handleInputChange}
                ></input>

                <input
                    className=''
                    type='text'
                    placeholder='apellidos'
                    autoComplete='off'
                    name='apellidos'
                    value={apellidos}
                    onChange={handleInputChange}
                ></input>

                <button onClick={handleSubmit}>Add</button>
                <button onClick={handleDelete}>Delete</button>
            </form>

            <ul>
                {personas.map((persona, index) => (
                    <li key={index}>
                        {persona.nombres} {persona.apellidos}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
