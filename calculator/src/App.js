import './index.css';
import { useReducer, useState, useEffect } from 'react';

 
function reducer(state, action) {
  const numFor = Intl.NumberFormat('en-us');
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
        input: numFor.format(eval(state.input))
      }
  }
  throw Error('Unknown action.');
}


function App() {
  const [state, dispatch] = useReducer(reducer, {input: ''});
  const [theme, setTheme] = useState(1);
  let root = document.documentElement;

  useEffect(() => {
    switch(theme) {
      case 1:
        root.style.setProperty('--body-text-color', 'white');
        root.style.setProperty('--text-key', 'hsl(221, 14%, 31%)');

        root.style.setProperty('--main-bg', 'hsl(222, 26%, 31%)');
        root.style.setProperty('--keypad-bg', 'hsl(223, 31%, 20%)');
        root.style.setProperty('--screen-bg', 'hsl(224, 36%, 15%)');

        root.style.setProperty('--key-bg', 'hsl(32, 26%, 89%)');
        root.style.setProperty('--key-shadow', 'hsl(28, 16%, 65%)');
        root.style.setProperty('--key-bg-active', 'white');

        root.style.setProperty('--key-equals-bg', 'hsl(6, 63%, 50%)');
        root.style.setProperty('--key-equals-shadow', 'hsl(6, 70%, 34%)');
        root.style.setProperty('--key-equals-active', 'hsl(6, 93%, 67%)');
        root.style.setProperty('--equals-text-color', 'white')

        root.style.setProperty('--key-alt-bg', 'hsl(225, 21%, 49%)');
        root.style.setProperty('--key-alt-shadow', 'hsl(224, 28%, 35%)');
        root.style.setProperty('--key-alt-active', 'hsl(224, 51%, 76%)');

        root.style.setProperty('--toggle-color', 'hsl(6, 63%, 50%)');
        break;

      case 2:
        root.style.setProperty('--body-text-color', 'hsl(60, 10%, 19%)');
        root.style.setProperty('--text-key', 'hsl(60, 10%, 19%)');

        root.style.setProperty('--main-bg', 'hsl(0, 0%, 90%)');
        root.style.setProperty('--keypad-bg', 'hsl(0, 5%, 81%)');
        root.style.setProperty('--screen-bg', 'hsl(0, 0%, 93%)');

        root.style.setProperty('--key-bg', 'hsl(45, 7%, 89%)');
        root.style.setProperty('--key-shadow', 'hsl(35, 11%, 61%)');
        root.style.setProperty('--key-bg-active', 'white');

        root.style.setProperty('--key-equals-bg', 'hsl(25, 98%, 40%)');
        root.style.setProperty('--key-equals-shadow', 'hsl(25, 99%, 27%)');
        root.style.setProperty('--key-equals-active', 'hsl(25, 100%, 61%)');
        root.style.setProperty('--equals-text-color', 'white');

        root.style.setProperty('--key-alt-bg', 'hsl(185, 42%, 37%)');
        root.style.setProperty('--key-alt-shadow', 'hsl(185, 58%, 25%)');
        root.style.setProperty('--key-alt-active', 'hsl(185, 56%, 41%)');

        root.style.setProperty('--toggle-color', 'hsl(25, 98%, 40%)');

        break;
      case 3:
        root.style.setProperty('--body-text-color', 'hsl(52, 100%, 62%)');
        root.style.setProperty('--text-key', 'hsl(52, 100%, 62%)');

        root.style.setProperty('--main-bg', 'hsl(268, 75%, 9%)');
        root.style.setProperty('--keypad-bg', 'hsl(268, 71%, 12%)');
        root.style.setProperty('--screen-bg', 'hsl(268, 71%, 12%)');

        root.style.setProperty('--key-bg', 'hsl(281, 89%, 26%)');
        root.style.setProperty('--key-shadow', 'hsl(285, 91%, 52%)');
        root.style.setProperty('--key-bg-active', 'hsl(267, 54%, 44%)');

        root.style.setProperty('--key-equals-bg', 'hsl(176, 100%, 44%)');
        root.style.setProperty('--key-equals-shadow', 'hsl(177, 92%, 70%)');
        root.style.setProperty('--key-equals-active', 'hsl(177, 100%, 79%)');
        root.style.setProperty('--equals-text-color', 'hsl(198, 20%, 13%)');

        root.style.setProperty('--key-alt-bg', 'hsl(268, 47%, 21%)');
        root.style.setProperty('--key-alt-shadow', 'hsl(290, 70%, 36%)');
        root.style.setProperty('--key-alt-active', 'hsl(280, 56%, 44%)');

        root.style.setProperty('--toggle-color', 'hsl(176, 100%, 44%)');
        break;
    }
  }, [theme]);
  
  const CalculatorButton = ({value}) => {
    const handleClick = (e) => {
      switch(value) {
        case 'reset':
          dispatch({ 
            type: 'clear_input'
          });
          break;
        case '=':
          dispatch({ 
            type: 'calculate'
          });
          break;
        case 'del':
          dispatch({ 
            type: 'delete'
          });
          break;
        default:
          dispatch({ 
            type: 'add_to_input',
            nextValue: e.target.innerHTML
          });
          break;
      }
    };
    return (value === 'reset' || value === '=' || value === 'del') 
    ? (value === 'reset')
      ? <button className='grid-col-span-2 alt-key' onClick = {handleClick}>{value}</button> 
      : (value === 'del') ? <button className='alt-key' onClick = {handleClick}>{value}</button> 
      : <button className='grid-col-span-2 equals-key' onClick = {handleClick}>{value}</button>
    : <button onClick = {handleClick}>{value}</button>
  }

  function changeTheme(e) {
    if (e.target.id === 'theme1-toggle') {
      setTheme(1);
    } else if (e.target.id === 'theme2-toggle') {
      setTheme(2);
    } else {
      setTheme(3);
    }
  }

  function addCommas(str) {
    let nums = str.match(/[0-9]+/g);
    let commaNums = [];

    let newStr = str;
    for (let i in nums) {
      commaNums[i] = Number(nums[i]).toLocaleString();
      newStr = newStr.replace(nums[i], commaNums[i]);
    }
    return newStr;
  }

  return (
    <main>
      <div className="heading">
        <h1>calc</h1>
        <div className="theme-wrapper">
          <span id="theme-label">THEME</span>
          <div className="toggle-with-numbers">
            <div id="theme-numbers">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <fieldset>
              <input type="radio" checked = {theme === 1} class="toggle-option" id="theme1-toggle" name="toggle-option" onClick={changeTheme}/>
              <input type="radio" class="toggle-option" id="theme2-toggle" name="toggle-option" onClick={changeTheme}/>
              <input type="radio" class="toggle-option" id="theme3-toggle" name="toggle-option" onClick={changeTheme}/>
              <label for="theme1-toggle"></label>
              <label for="theme2-toggle"></label>
              <label for="theme3-toggle"></label>
              <div class="toggle-dot">
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <div className="output">
        {addCommas(state.input)}
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
