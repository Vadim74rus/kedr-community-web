import React from 'react';
import { Link } from 'react-router-dom';

function Friends() {
  return (
    <div>
      <h2>Friends</h2>
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
    </div>
  );
}

export default Friends;