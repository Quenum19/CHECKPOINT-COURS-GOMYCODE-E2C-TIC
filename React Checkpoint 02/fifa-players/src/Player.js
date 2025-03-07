//Player.js
import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, number, age, image }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Number: {number}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
      </Card.Body>
    </Card>
  );
};

// Définir des props par défaut
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  number: "Unknown",
  age: "Unknown",
  image: "https://via.placeholder.com/150"
};

export default Player;
