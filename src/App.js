import React, { useState, useEffect } from 'react';
import sqlite3 from 'sqlite3';
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import './App.css';

function App() {
  const { onToggleButton, tg } = useTelegram();
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [increment, setIncrement] = useState(0.0000001);
  const [duration, setDuration] = useState(60000);
  const [timer, setTimer] = useState(duration);

  const startCounting = () => {
    if (!isCounting) {
      setIsCounting(true);
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + increment);
        setTimer((prevTimer) => prevTimer - 1000);
      }, 60);

      setTimeout(() => {
        clearInterval(intervalId);
        setIsCounting(false);
        setTimer(duration);
      }, duration);
    }
  };


  return (
    <div className="App">
      <Header />
      <div className="count-container">
        <h1 className="count" style={{ fontSize: '48px', textAlign: 'center' }}>
          KEDR: {count.toFixed(7)}
        </h1>
      </div>
      <div className="button-container">
        {!isCounting && (
          <button className="start-button full-width" onClick={startCounting} style={{ fontSize: '28px' }}>
            {timer > 0 ? `Start (${timer / 1000}s)` : "Start"}
          </button>
        )}
      </div>
      <div className="button-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="toggle-button" onClick={onToggleButton} style={{ fontSize: '18px' }}>
          Toggle
        </button>
      </div>
    </div>
  );
}

export default App;