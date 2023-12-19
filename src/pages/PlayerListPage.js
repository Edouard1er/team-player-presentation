import React from 'react';
import PlayerListComponent from '../components/PlayerListComponent';
import "../styles/PlayerPage.scss";

const PlayerListPage = () => {
  return (
    <div>
      <div className='playerNameContainer'><h1>M2 SQUAD PLAYERS</h1></div>
      <PlayerListComponent />
    </div>
  );
};

export default PlayerListPage;
