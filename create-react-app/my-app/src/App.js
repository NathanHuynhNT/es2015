import React from 'react';
//import logo from './logo.svg';
import './App.css';
import * as Calculator from './libs/Calculator';

console.log('2 + 3 = ', Calculator.add(2, 3));


function App() {
  return (
    <div className="App">
      Learn ES6!
    </div>
  );
}

export default App;
