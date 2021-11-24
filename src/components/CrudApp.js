import React, { useContext } from 'react';
import { PersonasContext } from '../context/PersonasProvider';

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

export default CrudApp;
