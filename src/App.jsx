import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [result, setResult] = useState('');

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  }

  const calculator = () => {
    if (result.trim() === "") {
      clear();
    } else {
      try {
        setResult(eval(result).toString());
      } catch (e) {
        clear();
      }
    }
  };

  const clear = () =>{
    setResult("")
  }

  return (
    <>
      <div className="calculator">
        <input type="text" placeholder="0" id="answer" value={result} readOnly />
        <div className="buttons">
          <input type="button" value="7" onClick={clickHandler} />
          <input type="button" value="8" onClick={clickHandler} />
          <input type="button" value="9" onClick={clickHandler} />
          <input type="button" value="/" className="operator" onClick={clickHandler} />

          <input type="button" value="4" onClick={clickHandler} />
          <input type="button" value="5" onClick={clickHandler} />
          <input type="button" value="6" onClick={clickHandler} />
          <input type="button" value="*" className="operator" onClick={clickHandler} />

          <input type="button" value="1" onClick={clickHandler} />
          <input type="button" value="2" onClick={clickHandler} />
          <input type="button" value="3" onClick={clickHandler} />
          <input type="button" value="-" className="operator" onClick={clickHandler} />

          <input type="button" value="0" onClick={clickHandler} />
          <input type="button" value="." onClick={clickHandler} />
          <input type="button" value="%" className="operator" onClick={clickHandler} />
          <input type="button" value="+" className="operator" onClick={clickHandler} />

          <input type="button" value="clear" className="end clear" onClick={clear} />
          <input type="button" value="=" className="end equal" onClick={calculator} />
        </div>
      </div>
    </>
  );
};

export default App;
