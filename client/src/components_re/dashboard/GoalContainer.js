import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import { easing } from "popmotion";
import MaterialIcons from "material-icons-react";

import Goal from "../dashboard/Goal";

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
      duration: 50,
      type: "spring",
      stiffness: 200,
      damping: 20
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
        onClick={() => this.setState({ extended: false })}
      >
        <PoseGroup>
          {this.state.extended && [
            <ContainerText className="goalContGreeting" key="greeting">
              Hello,
            </ContainerText>,
            <ContainerText className="goalContUser" key="username">
              {this.props.username}!
            </ContainerText>,
            <ContainerText className="goalContInst" key="inst">
              Tap to view goals
            </ContainerText>
          ]}
        </PoseGroup>

        {!this.state.extended && [
          <button
            key="close"
            className="closeButton"
            onMouseUp={() => this.setState({ extended: true })}
          >
            <MaterialIcons icon="close" id="closeIcon" />
          </button>,
          <div className="goalScroll" key="scroll">
            {this.props.goals.map(goal => (
              <Goal
                key={goal._id}
                id={goal._id}
                name={goal.name}
                icon={goal.icon}
                frequency={goal.frequency}
                description={goal.description}
                progress={goal.progress}
                username={this.props.username}
                getGoals={this.props.getGoals}
              />
            ))}
          </div>
        ]}
      </GoalCont>
    );
  }
}

export default GoalContainer;
