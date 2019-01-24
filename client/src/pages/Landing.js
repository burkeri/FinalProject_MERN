import React from 'react';
import { Col, Row, Container } from "../components/Grid";

function Landing() {
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <div className="jumbotron mt-2 mb-2 border shadow">
            <h1 className="text-center">Landing Page</h1>
            <hr />
            <p><a href="/signup">Sign Up</a></p>
            <a href="/login">Login</a>
          </div>  
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;