import React, { useRef, useState } from 'react';
import './UpdatedCalculator.css';
import {evaluate} from 'mathjs';

const UpdatedCalculator = () => {
  let [input, setInput] = useState('');
  let inputRef=useRef();

  const appendValue = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <input ref={inputRef} type="text" value={input} className="display" onChange={()=>{
        setInput(inputRef.current.value)
      }}/>

      <div className="buttons">
        <button onClick={deleteLast} title='delete one element'>⌫</button>
        <button onClick={() => appendValue('.')}>.</button>
        <button onClick={() => appendValue('+')}>+</button>
        <button onClick={() => appendValue('-')}>-</button>

        <button onClick={() => appendValue('*')}>*</button>
        <button onClick={() => appendValue('/')}>/</button>
        <button onClick={() => appendValue('%')}>%</button>
        <button onClick={()=> appendValue('()')}>()</button>
        
        
        <button onClick={() => appendValue('0')}>0</button>
        <button onClick={() => appendValue('1')}>1</button>
        <button onClick={() => appendValue('2')}>2</button>
        <button onClick={() => appendValue('3')}>3</button>

        

        <button onClick={() => appendValue('4')}>4</button>
        <button onClick={() => appendValue('5')}>5</button>
        <button onClick={() => appendValue('6')}>6</button>
        

        <button onClick={() => appendValue('7')}>7</button>
        <button onClick={() => appendValue('8')}>8</button>
        <button onClick={() => appendValue('9')}>9</button>
        
        
        <button onClick={() => appendValue('sqrt(')}>√</button>
        <button onClick={() => appendValue('log10(')}>log</button>
        
        

        
        <button title='power' onClick={() => appendValue('^')}>^</button>
        <button className="equal" onClick={calculate}>=</button>
        <button onClick={clearInput} title='All Clear'>AC</button>
      </div>
    </div>
  );
};

export default UpdatedCalculator;
