
import React, { useState } from 'react';
import './App.css';
import Invoice from './invoice';
import { createContext } from 'react';

export  const myContext = createContext()
function App() {


  const [currency , setCurrency] = useState("INR")
  const [tax , setTax] = useState(0)

 
  return (
    <div className="App">
       <myContext.Provider value={  {Currency:currency, Tax: tax}  }>
       <Invoice />
  </myContext.Provider>
      
    </div>
  );
}

export default App;
