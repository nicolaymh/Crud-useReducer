import React, { useContext } from 'react';
import { PersonasContext } from '../context/PersonasProvider';

export const Form = () => {
    const {
        stateForm: { nombres, apellidos },
        handleInputChange,
        handleSubmit,
        formRef,
    } = useContext(PersonasContext);

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
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
    );
};
