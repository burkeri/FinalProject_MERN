import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";

import Post from "../components_re/social/Post";
import SocialNav from "../components_re/social/SocialNav";

import "../css/index.css";

const PostCont = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export class Social extends Component {
  render() {
    return (
      <div className="socialBackground">
        <PoseGroup>
          <PostCont className="postCont" key="postCont">
            {this.props.posts.map(post => (
              <Post
                key={post._id}
                user={post.userID}
                createdAt={post.createdAt}
                picture={post.picture}
                goal={post.goalID}
                text={post.text}
              />
            ))}
          </PostCont>
        </PoseGroup>
        <SocialNav />
      </div>
    );
  }
}

export default Social;
