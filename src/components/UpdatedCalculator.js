
import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './UpdatedCalculator.css';

const ImprovedCalculator = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const appendValue = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => setInput('');

  const deleteLast = () => setInput((prev) => prev.slice(0, -1));

  const calculate = () => {
    try {
      const result = evaluate(input).toString();
      setHistory([...history, `${input} = ${result}`]);
      setInput(result);
    } catch {
      setInput('Error');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') calculate();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(input);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`calculator-container ${darkMode ? 'dark' : ''}`}>
      <div className="calculator">
        <div className="top-bar">
          <button onClick={toggleDarkMode} title='light or dark mode'>{darkMode ? '☀️' : '🌙'}</button>
          <button onClick={copyToClipboard} title="Copy">📋</button>
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="display"
        />

        <div className="buttons">
          <button onClick={deleteLast}>⌫</button>
          <button onClick={() => appendValue('.')}>.</button>
          <button onClick={() => appendValue('+')}>+</button>
          <button onClick={() => appendValue('-')}>-</button>

          <button onClick={() => appendValue('*')}>*</button>
          <button onClick={() => appendValue('/')}>/</button>
          <button onClick={() => appendValue('%')}>%</button>
          <button onClick={() => appendValue('(')}>(</button>
          <button onClick={() => appendValue(')')}>)</button>

          {[...Array(10)].map((_, i) => (
            <button key={i} onClick={() => appendValue(i.toString())}>{i}</button>
          ))}

          <button onClick={() => appendValue('sqrt(')}>√</button>
          <button onClick={() => appendValue('log10(')}>log</button>
          <button onClick={() => appendValue('^')}>^</button>
          <button className="equal" onClick={calculate}>=</button>
          <button onClick={clearInput}>AC</button>
        </div>
      </div>

      <div className="history">
        <h3>History</h3>
        <ul>
          {history.map((entry, idx) => (
            <li key={idx}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImprovedCalculator;

