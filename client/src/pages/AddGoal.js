import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import { Button } from "reactstrap";

class AddGoal extends Component {

  render() {
    return (
      <Wrapper>
        <h1>What type of goal?</h1>
        <ul>
          <li>
            <Button className="mb-2">
              Spirit
            </Button>
          </li>
          <li>
            <Button onClick={() => this.handleClick("Mind")} className="mb-2">
              Mind
            </Button>
          </li>
          <li>
            <Button onClick={() => this.handleClick("Body")} className="mb-2">
              Body
            </Button>
          </li>
        </ul>
      </Wrapper>
    );
  }
}

export default AddGoal;
