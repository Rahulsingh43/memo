import './App.css';
import { useState } from "react";
import { useEffect, useMemo } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const calculate = (num) => {
    console.log(6);

    for (let i = 0; i < 100000; i++) {} 
    
    return num;
  }
const a = useMemo(() =>  
  calculate(count)
  , [count]);
  return (
    <>
     <h1>{count}</h1>
     <button onClick={() => setCount(count + 1)}>Inc</button>
     <input type="text" onChange={(e) => setName(e.target.value)}/>
    <h1>{name}</h1>
    </>
  );
}

export default App;
