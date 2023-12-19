import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Team Player Presentation App</h1>
      <Link to="/players">View Players</Link>
    </div>
  );
};

export default HomePage;
