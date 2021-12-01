import React from 'react';

export const ListaPersonas = ({ persona, handleDelete, handleEdit }) => {
    return (
        <li className='text-capitalize list-group-item d-flex justify-content-between align-items-center bg-light px-2'>
            {persona.nombres} {persona.apellidos}
            <div className='d-flex'>
                <button
                    className='btn btn-danger mx-1'
                    onClick={() => {
                        handleDelete(persona.id);
                    }}
                >
                    Delete
                </button>
                <button
                    className='btn btn-warning'
                    onClick={() =>
                        handleEdit(
                            persona.id,
                            persona.nombres,
                            persona.apellidos,
                        )
                    }
                >
                    Editar
                </button>
            </div>
        </li>
    );
};
