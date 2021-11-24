import { PERSONAS_TYPES } from '../personasAction/personasAction.';

export const initialStatePersonas = [];

export const personasReducer = (personas, action) => {
    switch (action.type) {
        case PERSONAS_TYPES.ADD:
            return [...personas, action.payload];

        case PERSONAS_TYPES.DELETE:
            return;

        default:
            return personas;
    }
};
