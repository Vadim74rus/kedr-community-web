import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/tasks">Tasks</Link>
      <Link to="/friends">Friends</Link>
    </div>
  );
}

export default Home;