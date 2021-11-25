import React, { useContext } from 'react';
import { PersonasContext } from '../context/PersonasProvider';
import { Form } from './Form';
import { ListaPersonas } from './ListaPersonas';

const CrudApp = () => {
    const { personas, handleDelete, handleEdit} = useContext(PersonasContext);

    return (
        <div>
            <h1>Agregar Persona</h1>
            <hr />

            <Form />

            <ul>
                {personas.map((persona) => (
                    <ListaPersonas
                        key={persona.id}
                        persona={persona}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CrudApp;
