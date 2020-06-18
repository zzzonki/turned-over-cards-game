import React from 'react';
import CardList from '../CardList'
import Info from '../Info'
import './style.css'

function App() {
  const digitArray = []
    for (let i = 1; i < 17; i++) {
        digitArray.push(i)
    }
    for (let i = 1; i < 17; i++) {
        digitArray.push(i)    
    }
    digitArray.sort((a, b) => a > b ? Math.random() - 0.5 : -(Math.random() - 0.5))
    console.log(digitArray)

  return (
    <div className="App">
      <Info />
      <CardList digitArray = {digitArray} />
    </div>
  );
}

export default App;
