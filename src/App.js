import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import DataGrid from './DataGrid.js'

import './App.css';


function App() {

  return (
    <div className="App">
      <Container className="mainContainer">
        <Row>
          <Col><h1 className="titleText">TUF-2000M-PARSER</h1></Col>
        </Row>
        <div className="valueGrid">
          <DataGrid></DataGrid>

        </div>
      </Container>
    </div>
  );
}


export default App;
