import React,{useState} from 'react'

export default function App() {
  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")

  const ops = ['/', '*', '+', '-',"."]

  const updateCalc = value =>{
    if(
      ops.includes(value)&& calc===''||
      ops.includes(value)&& ops.includes(calc.slice(-1))
    ){
      return;
    }
    setCalc(calc+value);
    if(!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
  }

  const calculate = () =>{
    setCalc(eval(calc).toString());
  }

  const deleteLast = () =>{
    if (calc ==''){
      return;
    }
    const value = calc.slice(0,-1);
    setCalc(value);
  }

  const clear = () =>{
    setCalc("");
    setResult("0")
  }

  return (
    <div className="App">
      <div className='calculator'>
        <div className='display_screen'>
        <button onClick={deleteLast}>Del</button>
          <p>{result ? <span>({result})</span> : ''}&nbsp;
          {calc || "0"}</p>
          <button onClick={clear}>C</button>
        </div>
        <div className='keys'>
          <button onClick={() => updateCalc('1')}>1</button>
          <button onClick={() => updateCalc('2')}>2</button>
          <button onClick={() => updateCalc('3')}>3</button>
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('4')}>4</button>
          <button onClick={() => updateCalc('5')}>5</button>
          <button onClick={() => updateCalc('6')}>6</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('7')}>7</button>
          <button onClick={() => updateCalc('8')}>8</button>
          <button onClick={() => updateCalc('9')}>9</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={() => updateCalc('0')}>0</button>
          <button className='cal' onClick={calculate}>=</button>
          <button onClick={() => updateCalc('*')}>*</button>
        </div>
      </div>
    </div>
  )
}
