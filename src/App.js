import { Fragment, useState } from 'react';
import InputForm from './components/Form/Form';
import SingleColor from './components/singleColor/SingleColor';
import Values from 'values.js';

function App() {
  const [singleColor, setSingleColor] = useState(new Values('#008000').all(10));

  const ColorHandler = (color) => {
    setSingleColor(color);
  };

  return (
    <Fragment>
      <InputForm onAddColor={ColorHandler} />

      <section className="colors">
        {singleColor.map((color, index) => (
          <SingleColor key={index} Index={index} colors={color} />
        ))}
      </section>
    </Fragment>
  );
}

export default App;
