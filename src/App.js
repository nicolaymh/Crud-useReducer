import { useReducer } from 'react';
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

    return (
        <div>
            <h1>Agregar Persona</h1>
            <hr />

            <form>
                <input
                    type='text'
                    placeholder='nombre'
                    autoComplete='off'
                ></input>
            </form>
        </div>
    );
};

export default App;
