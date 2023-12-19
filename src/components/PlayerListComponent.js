import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import playersData from '../data/playersData';
import PlayerCardComponent from './PlayerCardComponent';

const PlayerListComponent = ({ players }) => {
  return (
    <Row>
      {playersData.map((player) => (
        <Col key={player.id} md={4} className="mb-4">
          <PlayerCardComponent avatar={player.avatar} playerLink={"/player/" + player.id} playerDetail={player.position} playerName={player.name} playerId={player.id} />
        </Col>
      ))}
      
    </Row>
  );
};

export default PlayerListComponent;
