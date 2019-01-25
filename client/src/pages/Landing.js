import React from "react";
import { Col, Row } from "../components/Grid";
import styled from "styled-components";

// CSS in JS components =======================
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Link = styled.a`
  color: black;
  font-weight: 200;
`;
// =============================================

// Landing component
function Landing() {
  return (
    <Wrapper>
      <Row>
        <Col size="md-12">
          <div className="jumbotron mt-2 mb-2 border shadow">
            <Title>Landing Page</Title>
            <hr />
            <Button primary>
              <Link href="/user/register">Sign Up</Link>
            </Button>
            <Button>
              <Link href="/user/login">Login</Link>
            </Button>
            <Button>
              <Link href="/user/dashboard">Dashboard</Link>
            </Button>
            <small>(Temp)</small>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default Landing;
