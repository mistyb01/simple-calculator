import './index.css';
import { useState, useReducer } from 'react';

function addbits(s) {
  var total = 0,
      s = s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
      
  while (s.length) {
    total += parseFloat(s.shift());
  }
  return total;
}

function reducer(state, action) {
  
  if (action.type === 'add_to_input') {

    return {
      input: state.input + action.nextValue,
      result: addbits(state.input + action.nextValue)
    };
  }
  throw Error('Unknown action.');
}

function App() {
  // state = the initial state (input = 0)
  // dispatch = the function that lets you change the value in response to an action (reducer)
  const [state, dispatch] = useReducer(reducer, {input: '', result: ''});

  const CalculatorButton = ({value}) => {
    const handleClick = (e) => {
      console.log(e);
      dispatch({ 
        type: 'add_to_input',
        nextValue: e.target.innerHTML
      });
    };
    return <button onClick = {handleClick}>{value}</button>
  }

  return (
    <main>
      <div className="output">
        <div className="input">{state.input}</div>
        <div className="result">{state.result}</div>
      </div>
      <div className="calculator-grid">
        <CalculatorButton value={7}></CalculatorButton>
        <CalculatorButton value={8}></CalculatorButton>
        <CalculatorButton value={9}></CalculatorButton>
        <CalculatorButton value={'del'}></CalculatorButton>
        <CalculatorButton value={4}></CalculatorButton>
        <CalculatorButton value={5}></CalculatorButton>
        <CalculatorButton value={6}></CalculatorButton>
        <CalculatorButton value={'+'}></CalculatorButton>
        <CalculatorButton value={1}></CalculatorButton>
        <CalculatorButton value={2}></CalculatorButton>
        <CalculatorButton value={3}></CalculatorButton>
        <CalculatorButton value={'-'}></CalculatorButton>
        <CalculatorButton value={'.'}></CalculatorButton>
        <CalculatorButton value={0}></CalculatorButton>
        <CalculatorButton value={'/'}></CalculatorButton>
        <CalculatorButton value={'*'}></CalculatorButton>
        <CalculatorButton value={'reset'}></CalculatorButton>
        <CalculatorButton value={'='}></CalculatorButton>

      </div>
    </main>
  );
}

export default App;
