import React, { useContext } from 'react';
import { PersonasContext } from '../context/PersonasProvider';
import { Alert } from './Alert';
import { Form } from './Form';
import { ListaPersonas } from './ListaPersonas';

const CrudApp = () => {
    const { personas, handleDelete, handleEdit, emptyFields } =
        useContext(PersonasContext);

    return (
        <div className='container'>
            <h1 className='text-center text-muted'>Crud con useReducer</h1>
            <hr />

            <div className='row'>
                <div className='col-12 col-md-6 my-auto mt-2'>
                    <Form />

                    {emptyFields && <Alert />}
                </div>

                <div className='col-12 col-md-6 my-3 my-md-0'>
                    <ol className='list-group'>
                        {personas.map((persona) => (
                            <ListaPersonas
                                key={persona.id}
                                persona={persona}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default CrudApp;
