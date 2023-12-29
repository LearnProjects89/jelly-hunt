import React, { useState, useEffect  } from 'react';
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
import Github from  './assets/github.png'

import './App.css';

function App() {
  const [results, setResults] = useState(Array(9).fill(null));
  const [counter, setCounter] = useState(5);
  const [gameEnded, setGameEnded] = useState(false);
  const [endGameResult, setEndGameResult] = useState('');


  useEffect(() => {
    if (counter === 0) {
      const randomBomb = Math.floor(Math.random() * 9);
      const newResults = results.map((_, index) =>
        index === randomBomb ? bomb : wrong
      );
      setResults(newResults);
      setEndGameResult(bomb);
      setGameEnded(true);
    }
  }, [counter, results]);

  const handleTreasure = (location) => {
    setCounter((prevCounter) => prevCounter - 1);

    const win = Math.floor(Math.random() * 9);
    const lose = Math.floor(Math.random() * 9);

    const newResults = [...results];

    if (location === win) {
      newResults[location] = treasure;
      setEndGameResult(treasure);
      setGameEnded(true);
    } else if (location === lose) {
      newResults[location] = bomb;
      setEndGameResult(bomb);
      setGameEnded(true);
    } else {
      newResults[location] = wrong;
    }

    setResults(newResults);
  };

  const handleRestartGame = () => {
    window.location.reload();
  };
  
  return (
    
    <div className="App">
      <div className='container'>
        <h1>Help Spongy</h1> 
        <h2>You have 5 turns, find jelly, avoid spongbob who asks quastions!!!</h2>
        
        
        <h2 id="counter">TURNS: {counter}</h2>

        {!gameEnded ? (
          <div id="table" border="1">
              <div className="table">
                <div id="1" onClick={() => handleTreasure(1)}><img src={results[1] || one} alt="1" /></div>
                <div id="2" onClick={() => handleTreasure(2)}><img src={results[2] || two} alt="2" /></div>
                <div id="3" onClick={() => handleTreasure(3)}><img src={results[3] || three} alt="3" /></div>
              </div>
              <div className='table'>
                <div id="4" onClick={() => handleTreasure(4)}><img src={results[4] || four} alt="4" /></div>
                <div id="5" onClick={() => handleTreasure(5)}><img src={results[5] || five} alt="5" /></div>
                <div id="6" onClick={() => handleTreasure(6)}><img src={results[6] || six} alt="6" /></div>
              </div>
              <div className='table'>
                <div id="7" onClick={() => handleTreasure(7)}><img src={results[7] || seven} alt="7" /></div>
                <div id="8" onClick={() => handleTreasure(8)}><img src={results[8] || eight} alt="8" /></div>
                <div id="9" onClick={() => handleTreasure(9)}><img src={results[9] || nine} alt="9" /></div>
              </div>
          </div>
        ) : (
          <div className="end-game"><img src={endGameResult} alt="End Game Result" /></div>
        )}

        {gameEnded && (<button type="button" onClick={handleRestartGame}>Restart Game</button>)}

        <div className="social-links">
            <h1 style = {{color: 'lightgreen'}}>Checkout the REPO:</h1> 
            
            <a href="https://github.com/LearnProjects89/jelly-hunt" target="_blank" rel="noreferrer" className="custom-link">
                <img src={Github} alt="Github" className="custom-link" />
            </a>
        </div>
      </div>
    </div>
  );
}

export default App;
