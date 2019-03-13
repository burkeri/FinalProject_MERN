import React, { Component } from "react";
import MaterialIcons from "material-icons-react";

export class Post extends Component {
  render() {
    return (
      <div>
        <div className="postCard">
          <MaterialIcons icon="person_pin" size="small" />
          <h3 className="postUser">{this.props.user}</h3>
          <h3 className="postCreate">{this.props.createdAt}</h3>
          <div style={{ clear: "both" }} />
          <hr />
          <div className="postBody">
            <h3>{this.props.goal}</h3>
            <p>{this.props.text}</p>
            <img className="postPic" src={this.props.picture} />
            <div className="likeCont">
              <h3 className="postLikes">{this.props.likes || 0}</h3>
              <MaterialIcons icon="thumb_up_alt" size="small" id="likeIcon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
