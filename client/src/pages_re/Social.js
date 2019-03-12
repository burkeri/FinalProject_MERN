import React, { Component } from "react";

import Post from "../components_re/social/Post";
import SocialNav from "../components_re/social/SocialNav";

import "../css/index.css";

export class Social extends Component {
  render() {
    return (
      <div className="socialBackground">
        <div className="postCont">
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
        </div>
        <SocialNav />
      </div>
    );
  }
}

export default Social;
