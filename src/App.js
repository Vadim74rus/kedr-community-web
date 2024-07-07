import React, { useState, useEffect } from 'react';
import { useTelegram } from "./hooks/useTelegram";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Friends from './pages/Friends';
import './App.css';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/tasks">Tasks</Link>
      <Link to="/friends">Friends</Link>
    </div>
  );
}

function Tasks() {
  return (
    <div>
      <h2>Tasks</h2>
      <Link to="/">Home</Link>
      <Link to="/friends">Friends</Link>
    </div>
  );
}

function Friends() {
  return (
    <div>
      <h2>Friends</h2>
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
    </div>
  );
}

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
    <Router>
      <div className="App">
        <Header />
        <h1 className="count" style={{ marginTop: '150px' }}>
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
        <Switch>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/friends">
            <Friends />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
