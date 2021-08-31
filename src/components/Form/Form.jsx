import React, { useState } from 'react';
import classes from './Form.module.css';
import Values from 'values.js';

const InputForm = (props) => {
  const [colorInput, setColorInput] = useState();
  const [Error, setError] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();

    try {
      if (colorInput) {
        let colors = new Values(colorInput).all(10);
        props.onAddColor(colors);
        setError(false);
      }
    } catch (error) {
      setError(true);
    }

    setColorInput('');
  };

  return (
    <section className={classes.container}>
      <h3>
        Color <span>Shades</span>
      </h3>
      {Error && <p className={classes.invalidText}>Enter valid hex color</p>}
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          value={colorInput}
          placeholder="#008000"
          onChange={(e) => setColorInput(e.target.value)}
          className={`${Error ? classes.invalid : null}`}
        />

        <button className={classes.btn}>Generate</button>
      </form>
    </section>
  );
};

export default InputForm;
