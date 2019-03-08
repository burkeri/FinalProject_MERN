import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostCard from "../../components/PostCard";
// import Navbar from "../../components/Navbar";
import { Container, Row, Col, Button } from "reactstrap";

class SocialFeed extends Component {
  state = {
    //
  };

  render() {
    return (
      <Container className="bg-light">
        <header className="text-center">
          <h1>Social Feed:</h1>
          <br />
        </header>
        <section>
          <Row>
            <Col>
              {/* Map thru posts state and render PostCards */}
              {this.props.posts.map(post => (
                <PostCard key={post._id} post={post} />
              ))}
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
