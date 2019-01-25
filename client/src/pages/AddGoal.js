import React from "react";
import Wrapper from "../components/Wrapper";
import { Button } from "reactstrap";

function AddGoal(props) {
    // console.log(props);
    return (
      <Wrapper>
        <h1>What type of goal?</h1>
        <ul>
          <li>
            <Button 
            onClick={() => props.handleChoice("Spirit")}
            href="/user/addgoalcreate" 
            className="mb-2"
            >
              Spirit
            </Button>
          </li>
          <li>
            <Button 
            onClick={() => props.handleChoice("Mind")} 
            href="/user/addgoalcreate"
            className="mb-2">
              Mind
            </Button>
          </li>
          <li>
            <Button 
            onClick={() => props.handleChoice("Body")} 
            href="/user/addgoalcreate"
            className="mb-2">
              Body
            </Button>
          </li>
        </ul>
      </Wrapper>
    );
}

export default AddGoal;
