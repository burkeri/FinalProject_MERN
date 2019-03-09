import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import { easing } from "popmotion";

import "../../components_re/index.css";

const GoalCont = posed.div({
  full: {
    height: "103vh",
    transition: {
      duration: 300,
      ease: easing.cubicBezier(0.84, -0.03, 0.53, 0.98)
    }
  },
  half: {
    height: "50%",
    transition: {
      duration: 300,
      ease: easing.cubicBezier(0.84, -0.03, 0.53, 0.98)
    }
  }
});

const ContainerText = posed.h1({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

class GoalContainer extends Component {
  state = {
    extended: true
  };

  render() {
    return (
      <GoalCont
        className="goalContainer"
        pose={this.state.extended ? "half" : "full"}
        onClick={() => this.setState({ extended: !this.state.extended })}
      >
        <PoseGroup>
          {this.state.extended && [
            <ContainerText className="goalContGreeting" key="greeting">
              Hello,
            </ContainerText>,
            <ContainerText className="goalContUser" key="username">
              username!
            </ContainerText>,
            <ContainerText
              className="goalContInst"
              key="inst"
              pose={this.state.blink ? "enter" : "exit"}
            >
              Tap to view goals
            </ContainerText>
          ]}
        </PoseGroup>
      </GoalCont>
    );
  }
}

export default GoalContainer;
