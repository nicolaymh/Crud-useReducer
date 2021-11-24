import React, { useContext } from 'react';
import { PersonasContext } from '../context/PersonasProvider';
import { ListaPersonas } from './ListaPersonas';

const CrudApp = () => {
    const {
        stateForm,
        personas,
        handleInputChange,
        handleSubmit,
        handleDelete,
    } = useContext(PersonasContext);

    const { nombres, apellidos } = stateForm;

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

                <button type='submit'>Add</button>
            </form>

            <ul>
                {personas.map((persona) => (
                    <ListaPersonas
                        key={persona.id}
                        persona={persona}
                        handleDelete={handleDelete}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CrudApp;
