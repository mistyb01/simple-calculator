import './index.css';

function App() {
  return (
    <main>
      <input type="text" className="calculator-window"></input>
      <div className="calculator-grid">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>del</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button>/</button>
        <button>x</button>
        <button className="grid-col-span-2">reset</button>
        <button className="grid-col-span-2">=</button>
      </div>
    </main>
  );
}

export default App;
