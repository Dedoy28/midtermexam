import React, { useState } from 'react';
import './App.css';

const talentList = [
  "Being On Time",
  "Making An Effort",
  "Being High Energy",
  "Having A Positive Attitude",
  "Being Passionate",
  "Using Good Body Language",
  "Being Coachable",
  "Doing A Little Extra",
  "Being Prepared",
  "Having A Strong Work Ethic"
];

function App() {
  const [displayText, setDisplayText] = useState("10 Things That Require Zero Talent");
  const name = "LAURENCE ANDRE' MALANA - IT3A";

  const handleClick = (key) => {
    if (key >= 0 && key < 10) {
      setDisplayText(talentList[key]);
    } else if (key === 'r') {
      setDisplayText("10 Things That Require Zero Talent");
    } else if (key === 'n') {
      setDisplayText(name.toUpperCase());
    }
  };

  return (
    <div className="App">
      <h1>{name}</h1>
      <h2>{displayText}</h2>
      <div className="keypad">
        {talentList.map((talent, index) => (
          <button key={index} onClick={() => handleClick(index)}>{index + 1}</button>
        ))}
        <button onClick={() => handleClick('r')}>Reset</button>
        <button onClick={() => handleClick('n')}>Show Name</button>
      </div>
    </div>
  );
}

export default App;
