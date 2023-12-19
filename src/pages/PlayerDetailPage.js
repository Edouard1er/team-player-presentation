import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import playersData from '../data/playersData';
import "../styles/PlayerPage.scss";

const PlayerDetailPage = () => {

  const navigate = useNavigate();

  const onClickHandler = () => navigate("/");

  const { id } = useParams();

  const player = playersData.find((player) => player.id === parseInt(id));

  if (!player) {
    return <div>Player not found</div>;
  }

  const gradientBackground = {
    backgroundImage: `linear-gradient(to bottom, #3498db, #e74c3c)`,
    maxHeight: '1200px',
    border: '2px solid #ddd',
  };

  return (
    <div>
      <div className='playerNameContainer'><h1>{player.name}</h1></div>
      
      
      <Card style={{marginBottom: "5%"}}>
      <div style={gradientBackground}>
        <Card.Img style={{ height: '100%', objectFit: 'cover' }} variant="top" src={player.avatar2} alt={player.name} />
      </div>
      </Card>
        

      <Card style={{marginBottom: "5%"}}>
      <Card.Body>
  <Card.Title style={{ background: "#bd5e61", color: "white", padding: "1%" }}>Player Profile</Card.Title>
  <Card.Text style={{ paddingLeft: "1%" }}>
    <strong>Name:</strong> {player.name}
  </Card.Text>
  <Card.Text style={{ paddingLeft: "1%" }}>
    <strong>Squad number:</strong> {player.id}
  </Card.Text>
  <Card.Text style={{ paddingLeft: "1%" }}>
    <strong>Born:</strong> {player.placeOfBirth}
  </Card.Text>
  <Card.Text style={{ paddingLeft: "1%" }}>
    <strong>Coding Strengths:</strong> {player.codingStrengths}
  </Card.Text>
  <Card.Text style={{ paddingLeft: "1%" }}>
    <strong>Coding Weaknesses:</strong> {player.codingWeaknesses}
  </Card.Text>
  <Card.Text style={{ paddingLeft: "1%" }}>
    <strong>Biggest Achievement in Coding:</strong> {player.biggestAchievementInCoding}
  </Card.Text>
  <Card.Text style={{ paddingLeft: "1%" }}>
    <strong>Interests:</strong> {player.interests}
  </Card.Text>
</Card.Body>

    </Card>

    <div style={{marginBottom: "5%"}}>
     {player.detailText}
    </div>

      <div style={{marginBottom: "5%"}}>
        <button className="customButton" onClick={() => onClickHandler()}>
          Go back to Team Player List
        </button>
      </div>
    </div>
  );
};

export default PlayerDetailPage;
