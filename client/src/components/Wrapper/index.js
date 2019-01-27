import React from "react";
import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

function goBack() {
  window.history.back();
}

function Wrapper(props) {
  return (
    <Container className="bg-light shadow mt-2 mb-2">
      <Row>
        <Col>
          <Button onClick={() => goBack()}>B</Button>
        </Col>
      </Row>
      <br />
      <section>{props.children}</section>
      <br />
    </Container>
  );
}

export default Wrapper;