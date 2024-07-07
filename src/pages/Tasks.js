import React from 'react';
import { Link } from 'react-router-dom';

function Tasks() {
  return (
    <div>
      <h2>Tasks</h2>
      <Link to="/">Home</Link>
      <Link to="/friends">Friends</Link>
    </div>
  );
}

export default Tasks;