import React, { useState } from 'react';
import './App.css';
import Characters from './components/Characters/Characters.js';
import Controls from './components/Controls.js';
import Count from './components/Count.js';
import Display from './components/Display.js';
import background from './background.png';

function App() {
  const [head, setHead] = useState('stoic');
  const [middle, setMiddle] = useState('torso');
  const [bottom, setBottom] = useState('cargo');
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);
  const [input, setInput] = useState ([]);
  const [updateInput, setUpdate] = useState('');

  const handleChange = (type, value) => {
    if (type === 'head') {
      setHead(value);
      setHeadCount(headCount + 1);
    }
    if (type === 'middle') {
      setMiddle(value);
      setMiddleCount(middleCount + 1);
    }
    if (type === 'bottom') {
      setBottom(value);
      setBottomCount(bottomCount + 1);
    }
  };
//
  const handleSubmit = () => {
    setUpdate(input);
    setInput((currentState) => [...currentState, updateInput]);
  };
  return (
    <div className name="App" style={{ 
      backgroundImage: `url(${background})` }}>
      <main>
        <h1>Nic Cage Designer</h1>
        <section className="container">
          <div className="left">
            <Controls {... { head, middle, bottom, handleChange }} />
          </div>
          <div className="right">
            <Characters {... { head, middle, bottom }} />
            { <Count { ...{}} />
            }
          </div>
          <div>
            <p> {''}
            You have changed the head {headCount} times, you have changed the shirt {middleCount}{''} times, you have changed the bottom {bottomCount} time. And what about that classic Nic Cage catchphrase!{''}
            </p>
            <input className ="Catchphrase" onChange={(e) => setUpdate(e.target.value)}></input>
            <button className="btn" onClick={handleSubmit}>
              {''}
              SUBMIT {''}
            </button>
          </div>
          <Display input={input} />
        </section>
      </main>

    </div>
  );
}
export default App;