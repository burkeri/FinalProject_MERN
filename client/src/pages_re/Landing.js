import React from "react";
import { Container, Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";

import "../css/index.css";

// Landing component
function Landing() {
    return (
        <Container className="landingBackground">
            <Row>
                <Col size="md-12">
                    <h1 id="title">LifeSet</h1>
                    <MaterialIcon icon="check_circle" id="logoIcon" />
                    <Link to="/user/register">
                        <Button id="signIn">Sign Up</Button>
                    </Link>
                    <Link to="/user/login">
                        <Button id="signUp">Sign In</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Landing;
