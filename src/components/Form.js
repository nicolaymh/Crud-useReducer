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
        <form ref={formRef} onSubmit={handleSubmit} className='d-flex'>
            <input
                className='form-control mx-1'
                type='text'
                placeholder='nombres'
                autoComplete='off'
                name='nombres'
                value={nombres}
                onChange={handleInputChange}
            ></input>

            <input
                className='form-control me-1'
                type='text'
                placeholder='apellidos'
                autoComplete='off'
                name='apellidos'
                value={apellidos}
                onChange={handleInputChange}
            ></input>

            <button className='btn btn-primary' type='submit'>
                Add
            </button>
        </form>
    );
};
