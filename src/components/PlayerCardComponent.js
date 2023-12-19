import React from 'react';
import { Card } from 'react-bootstrap';
import "../styles/PlayerCardComponent.scss";
import { useNavigate } from 'react-router-dom';

const PlayerCardComponent = ({ avatar, playerLink, playerName, playerDetail, playerId }) => {
    const navigate = useNavigate();

    const onClickHandler = () => navigate(playerLink);
    return (
        <Card className='player-card'>
            <Card.Img onClick={()=> onClickHandler()} className='player-card-img' variant="top" src={avatar} alt={playerName} />
            <Card.Body className='player-card-body' style={{cursor: "pointer"}} onClick={()=> onClickHandler()}>
                <Card.Title style={{color: "#1c367f", fontWeight: "bold", fontSize: "large"}}>{playerName}</Card.Title>
                <Card.Text style={{color: "#fe0000", fontWeight: "bold"}}>{playerDetail}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PlayerCardComponent;
