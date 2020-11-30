import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GameCard from './GameCard';

function Game() {

  const cards = [1,2,3,4,5,6];

  return (
      <Container fluid>
        <Row>
        { cards.map(x => 
          <Col xs={4}>
            <GameCard foo={x} />
          </Col>
        )}
        </Row>
      </Container>
  );
}

export default Game;