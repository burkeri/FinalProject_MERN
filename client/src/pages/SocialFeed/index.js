import React, { Component } from "react";
import { Link } from "react-router-dom";
// import PostCard from "../../components/PostCard";
// import Navbar from "../../components/Navbar";
import { Container, Row, Col, Button } from "reactstrap";

class SocialFeed extends Component {
  state = {
    //
  };

  componentDidUpdate() {
    //
  }

  render() {
    return (
      <Container className="bg-light">
        <header>
          <h1>Social Feed:</h1>
        </header>
        <section>
          <Row>
            <Col>
              {/* Map thru posts state and render PostCards */}
              <h2 className="text-center">Post cards go here</h2>
            </Col>
          </Row>
        </section>
        <br />
        {/* Navbar goes on bottom */}
        {/* Temp buttons were made */}
        <Row className="justify-content-center">
          <Col className="text-center">
            <Button>Navbar button</Button>
          </Col>
          <Col className="text-center">
            <Link to="/createpost">
              <Button>
                <i className="fas fa-pencil-alt" /> New Post
              </Button>
            </Link>
          </Col>
          <Col className="text-center">
            <Button>Navbar button</Button>
          </Col>
        </Row>
        <br />
      </Container>
    );
  }
}

export default SocialFeed;
