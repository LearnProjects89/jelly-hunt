import React, { useState } from 'react';
import one from './assets/table/01.png';
import two from './assets/table/02.png';
import three from './assets/table/03.png';
import four from './assets/table/04.png';
import five from './assets/table/05.png';
import six from './assets/table/06.png';
import seven from './assets/table/07.png';
import eight from './assets/table/08.png';
import nine from './assets/table/09.png';
import bomb from './assets/bomb.jpg';
import treasure from './assets/treasure.png';
import wrong from './assets/wrong.jpeg';

import './App.css';

function App() {

  const [result, setResult] = useState('');

  const handleTreasure = (location) => {
    if (location === 1) {
      setResult('You found the treasure!');
    } else {
      setResult('Try another location.');
    }
  };

  const handleRestartGame = () => {
    window.location.reload();
  };

  return (
    
    <div className="App">
      <div className='container'>
        <h1>Help Spongy</h1> 
        <h2>find jelly, avoid spongbob who asks quastions</h2>
        
        
        <h2 id="counter">TURNS: 5</h2>


        <div id="table" border="1">
            <div className='table'>
              <div id="1" onClick={() => handleTreasure(1)}><img src={one} alt="1"/></div>
              <div id="2" onClick={() => handleTreasure(2)}><img src={two} alt="2"/></div>
              <div id="3" onClick={() => handleTreasure(3)}><img src={three} alt="3"/></div>
            </div>
            <div className='table'>
              <div id="4" onClick={() => handleTreasure(4)}><img src={four} alt="4"/></div>
              <div id="5" onClick={() => handleTreasure(5)}><img src={five} alt="5"/></div>
              <div id="6" onClick={() => handleTreasure(6)}><img src={six} alt="6"/></div>
            </div>
            <div className='table'>
              <div id="7" onClick={() => handleTreasure(7)}><img src={seven} alt="7"/></div>
              <div id="8" onClick={() => handleTreasure(8)}><img src={eight} alt="8"/></div>
              <div id="9" onClick={() => handleTreasure(9)}><img src={nine} alt="9"/></div>
            </div>
        </div>
        
        <p>{result}</p>
        <button type="button" onClick={handleRestartGame}>Restart Game</button>

      </div>
    </div>
  );
}

export default App;
