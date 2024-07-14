import React, { useState, useEffect } from 'react';
import { useTelegram } from "./hooks/useTelegram";
import { createTable, addUser, getUser } from "./database";
import Header from "./components/Header/Header";
import './App.css';

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

    // Создание таблицы в базе данных при первом запуске
    createTable();

    // Получение данных пользователя из базы данных
    const userId = 123; // Замените на фактический идентификатор пользователя
    const user = getUser(userId);

    // Использование данных пользователя
    console.log(user);
  }, []);

  return (
    <div className="App">
      <Header />
      <h1 className="count" style={{ marginTop: '250px' }}>
        K: {count.toFixed(4)}
      </h1>
      <div className="button-container">
        <button className="start-button" onClick={startCounting} disabled={isCounting}>
          {isCounting ? "Counting..." : "Start"}
        </button>
        <button className="toggle-button" onClick={onToggleButton}>
          Toggle
        </button>
      </div>
    </div>
  );
}

export default App;
