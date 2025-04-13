import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [count,setCount]=useState(0)
  return (
    <div className="App">
     <h1>counter App</h1>
    // Decrease Button
     <button onClick={()=>setCount(count-1)}>DEC</button>
       <h2>{count}</h2>
   // Increase Button
     <button onClick={()=>setCount(count +1)}>INC</button>
    </div>
  );
}

export default App;
