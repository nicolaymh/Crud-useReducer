import React from 'react';

export const ListaPersonas = ({ persona, handleDelete }) => {
    return (
        <div>
            <li>
                {persona.nombres} {persona.apellidos}
            </li>
            <button
                onClick={() => {
                    handleDelete(persona.id);
                }}
            >
                Delete
            </button>
        </div>
    );
};
