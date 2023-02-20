import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [Inputs, setInputs] = useState('');
  const [Result, setResult] = useState(0);

  useEffect(() => {
    console.log(Inputs)
  }, []);

  const handleNumber = (e)=>{
    setInputs(Inputs.concat(e.target.innerHTML))
  }
  
  const handleOperator = (e)=>{
    if(Inputs === ""){
      console.log("errorrorr");
    }
    else{  
      setInputs(Inputs.concat(e.target.innerHTML))
    }
  }

  const handleEqual =()=>{
    setResult(eval(Inputs));
    setInputs(eval(Inputs).toString());
  }

  const handleClear = () =>{
    setInputs('');
    setResult(0);
  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator">
        <div id="keypad">
            <div className="screen">
                <div id="result-screen">{Result}</div>
                <div id="input-screen">{Inputs}</div>
            </div>
            <div id="keys">
                <div className="clear" onClick={handleClear}>Clear</div>
                <div className="operator" onClick={handleOperator} id="division-symbol"> &divide; </div>
                <div className="operator" onClick={handleOperator}>x</div>
                <div className="operator" onClick={handleOperator}>-</div>
                <div className="number" onClick={handleNumber}>7</div>
                <div className="number" onClick={handleNumber}>8</div>
                <div className="number" onClick={handleNumber}>9</div>
                <div className="operator" onClick={handleOperator} id="plus-symbol">+</div>
                <div className="number" onClick={handleNumber}>4</div>
                <div className="number" onClick={handleNumber}>5</div>
                <div className="number" onClick={handleNumber}>6</div>
                <div className="number" onClick={handleNumber}>1</div>
                <div className="number" onClick={handleNumber}>2</div>
                <div className="number" onClick={handleNumber}>3</div>
                <div className="equal" id="equal-symbol" onClick={handleEqual}>=</div>
                <div className="number" id="zero" onClick={handleNumber}>0</div>
                <div className="decimal" onClick={handleNumber}>.</div>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
