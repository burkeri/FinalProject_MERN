import React from "react";
import { Container, Col, Row, Button } from "reactstrap";
// import { Col, Row } from "../components/Grid";
// import styled from "styled-components";
import MaterialIcon from "material-icons-react";
import "./landing.css";

// CSS in JS components =======================
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

// const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${props => (props.primary ? "palevioletred" : "white")};
//   color: ${props => (props.primary ? "white" : "palevioletred")};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

// const Link = styled.a`
//   color: black;
//   font-weight: 200;
// `;
// =============================================

// Landing component
function Landing() {
  return (
    <Container className="landingBackground">
      <Row>
        <Col size="md-12">
          <h1 id="title">LifeSet</h1>
          <MaterialIcon icon="check_circle" id="logoIcon" />
          <Button id="signIn" href="/user/register">Sign Up</Button>
          <Button id="signUp" href="/user/login">Sign In</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
