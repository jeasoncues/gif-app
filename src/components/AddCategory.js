import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
      setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //TODO: Validacion en el input deben de ver 2 caracteres como minimo
    if(inputValue.trim().length > 2){
        setCategories( categories => [ inputValue,...categories, ]);
        setInputValue('');
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
        <input
           type="text"
           value={ inputValue }
           onChange={ handleInputChange }
        />
    </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired  // mi props es una funcion requerida
}
