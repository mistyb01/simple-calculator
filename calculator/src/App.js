import './index.css';
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'add_to_input':
      return {
        input: state.input + action.nextValue
      };
    case 'clear_input':
      return {
        input: ''
      };
    case 'delete':
      return (state.input.length>0) 
        ? { input: state.input.slice(0, state.input.length-1) }
        : { input: '' }
    case 'calculate':
      return {
        input: eval(state.input)
      }
  }
  throw Error('Unknown action.');
}

function App() {
  // state = the initial state (input = 0)
  // dispatch = the function that lets you change the value in response to an action (reducer)
  const [state, dispatch] = useReducer(reducer, {input: ''});

  const CalculatorButton = ({value}) => {
    const handleClick = (e) => {
      // switch(value) {
      //   case 'reset':
      //     dispatch({ 
      //       type: 'clear_input'
      //     });
      //     break;
      //   case '=':
      //     dispatch({ 
      //       type: 'calculate'
      //     });
      //     break;
      //   case 'del':
      //     dispatch({ 
      //       type: 'delete'
      //     });
      //     break;
      //   default:
      //     dispatch({ 
      //       type: 'add_to_input',
      //       nextValue: e.target.innerHTML
      //     });
      //     break;
      // }
      if (value === 'reset') {
        dispatch({ 
          type: 'clear_input'
        });
      } else if (value === '=') {
        dispatch({ 
          type: 'calculate'
        });
      } else if (value === 'del') {
        dispatch({ 
          type: 'delete'
        });
      } else {
        dispatch({ 
          type: 'add_to_input',
          nextValue: e.target.innerHTML
        });
      }
    };
    return (value === 'reset' || value === '=' || value === 'del') 
    ? (value === 'reset')
      ? <button className='grid-col-span-2 alt-key' onClick = {handleClick}>{value}</button> 
      : (value === 'del') ? <button className='alt-key' onClick = {handleClick}>{value}</button> 
      : <button className='grid-col-span-2 equals-key' onClick = {handleClick}>{value}</button>
    : <button onClick = {handleClick}>{value}</button>
  }

  return (
    <main>
      <div className="heading">
        <h1>calc</h1>
        <div className="theme">theme</div>
      </div>
      <div className="output">
        {state.input}
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
