import { PERSONAS_TYPES } from '../personasAction/personasAction.';

export const personasReducer = (personas, action) => {
    switch (action.type) {
        case PERSONAS_TYPES.ADD:
            return [...personas, action.payload];

        case PERSONAS_TYPES.DELETE:
            return personas.filter(
                (personas) => personas.id !== action.payload,
            );

        case PERSONAS_TYPES.EDITAR:
            return personas.map((persona) =>
                persona.id === action.payload.id
                    ? {
                          ...persona,
                          nombres: action.payload.nombres,
                          apellidos: action.payload.apellidos,
                      }
                    : persona,
            );

        default:
            return personas;
    }
};
