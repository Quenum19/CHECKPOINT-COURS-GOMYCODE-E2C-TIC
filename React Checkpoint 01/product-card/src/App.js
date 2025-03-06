import './App.css';

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
  const userName = "Sio Quenum"; 

  return (
    <div className="container mt-4">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
          <Button variant="primary">Acheter</Button>
        </Card.Body>
      </Card>

      <div className="mt-3">
        {userName ? (
          <>
            <p>Bonjour, {userName}!</p>
            <img src="/image/phone.jpg" alt="Ton image" className="img-fluid" />
          </>
        ) : (
          <p>Bonjour !</p>
        )}
      </div>
    </div>
  );
};

export default App;
