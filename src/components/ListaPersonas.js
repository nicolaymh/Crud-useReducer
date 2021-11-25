import React from 'react';

export const ListaPersonas = ({ persona, handleDelete, handleEdit }) => {
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
            <button
                onClick={() =>
                    handleEdit(persona.id, persona.nombres, persona.apellidos)
                }
            >
                Editar
            </button>
        </div>
    );
};
