import React, { useState, useEffect } from 'react';
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import './App.css';

function App() {
  const { onToggleButton, tg } = useTelegram();
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [claimButtonVisible, setClaimButtonVisible] = useState(false);

  const startCounting = () => {
    if (!isCounting) {
      setIsCounting(true);
      let increment = 0.0000001; // Измените значение здесь для ручной настройки количества начисляемых монет
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + increment);
      }, 60); // Измените значение здесь для ручной настройки скорости начисления монет

      setTimeout(() => {
        clearInterval(intervalId);
        setIsCounting(false);
        setClaimButtonVisible(true);
      }, 60000); // Измените значение здесь для ручной настройки продолжительности начисления монет
    }
  };


  return (
    <div className="App">
      <Header />
      <h1 className="count" style={{ marginTop: '150px' }}>
        K: {count.toFixed(7)} {/* Измените значение здесь для ручной настройки точности отображения */}
      </h1>
      <div className="button-container">
        {!claimButtonVisible && (
          <button className="start-button" onClick={startCounting} disabled={isCounting}>
            {isCounting ? "Counting..." : "Start"}
          </button>
        )}
        {claimButtonVisible && (
          <button className="claim-button">
            Claim
          </button>
        )}
        <button className="toggle-button" onClick={onToggleButton}>
          Toggle
        </button>
      </div>
    </div>
  );
}

export default App;