import React, { useState } from 'react';

function Form() {
  const [input, setInput] = useState({
    name: '',
    age: 0,
    location: '',
    module: '',
  })
  // const [name, setName] = useState('')
  // const [age, setAge] = useState('')
  // const [location, setLocation] = useState('')
  // const [module, setModule] = useState('')

  const handleChange = ({target}) => {
setInput({
  ...input,
[target.name]: target.value,
})
  };

  
  return (
    <form className="App-header">
      <fieldset>
          <label htmlFor="name">
            Nome completo:
            <input type="text" name="name" value={ input.name } 
            onChange={ handleChange }
            />
          </label>
          <label htmlFor="age">
            Idade:
            <input type="number" name="age" value={ input.age }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="location">
            Cidade:
            <input type="text" name="location" value={ input.location }
              onChange={ handleChange }
            />
          </label>
      </fieldset>
      <fieldset>
        <legend>Módulo</legend>
        <label htmlFor="fundamentals">
          Fundamentos
          <input
            type="radio"
            id="fundamentals"
            name="module"
            value="Fundamentos"
            checked={input.module === 'Fundamentos'}
            onChange={ handleChange }
          />
        </label>
        <br />
        <label htmlFor="frontend">
          Front-end
          <input
            type="radio"
            id="frontend"
            name="module"
            value="Front-end"
            checked={input.module === 'Front-end'}
            onChange={ handleChange }
          />
        </label>
        <br />
        <label htmlFor="backend">
          Back-end
          <input
            type="radio"
            id="backend"
            name="module"
            value="Back-end"
            checked={input.module === 'Back-end'}
            onChange={ handleChange }
          />
        </label>
        <br />
        <label htmlFor="cs">
          Ciência da computação
          <input
            type="radio"
            id="cs"
            name="module"
            value="Ciência da computação"
            checked={input.module === 'Ciência da computação'}
            onChange={ handleChange }
          />
        </label>
        <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          console.log('Click!');
        }}
      >
        Enviar
      </button>
      </fieldset> 
  </form>
  );
}

export default Form;