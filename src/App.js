import React, { useState, useEffect } from 'react';
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";

function App() {
  const { onToggleButton, tg } = useTelegram();
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const startCounting = () => {
    if (!isCounting) {
      setIsCounting(true);
      let increment = 0.0001;
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + increment);
      }, 30);
      setTimeout(() => {
        clearInterval(intervalId);
        setIsCounting(false);
      }, 10000);
    }
  };

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <h1>K: {count.toFixed(4)}</h1>
      <button onClick={startCounting} disabled={isCounting}>
        {isCounting ? "Counting..." : "Start"}
      </button>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
