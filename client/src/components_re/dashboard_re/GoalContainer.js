import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import { easing } from "popmotion";

import Goal from "../dashboard_re/Goal";

import "../../css/index.css";

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
              {this.props.username}!
            </ContainerText>,
            <ContainerText
              className="goalContInst"
              key="inst"
            >
              Tap to view goals
            </ContainerText>
          ]}
        </PoseGroup>

        {!this.state.extended ?
          this.props.goals.map(goal => (
            <Goal
              key={goal._id}
              name={goal.name}
              icon={goal.icon}
              frequency={goal.frequency}
              description={goal.description}
              progress={goal.progress}
            />
          ))
        :
        <br/>
        }

      </GoalCont>
    );
  }
}

export default GoalContainer;
