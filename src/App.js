import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'

import './App.css';

function App() {
  return (
    <div className="App">
      <Container className="mainContainer" fluid="sm">
        <Row>
          <Col><h1 className="titleText">TUF-2000M-PARSER</h1></Col>
        </Row>
        <div className="valueGrid">
        <Row className="legendRow">
          <Col>Variable Name and Unit (if applicable)</Col><Col>Value</Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        </div>
      </Container>
    </div>
  );
}


export default App;
