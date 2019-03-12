import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import MaterialIcons from "material-icons-react";

const PostCard = posed.div({});

export class Post extends Component {
  render() {
    return (
      <PostCard className="postCard">

        <MaterialIcons icon="person_pin" size="small"/>
        <h3 className="postUser">{this.props.user}</h3>
        <hr />

        <div className="postBody">

        </div>
        <p>{this.props.text}</p>
        <img className="postPic" src={this.props.picture} />
        <MaterialIcons icon="thumb_up_alt" size="small"/>
        <h3>{this.props.likes || 0}</h3>
        <h3>{this.props.goal}</h3>
        <h3 className="postCreate">{this.props.createdAt}</h3>
      </PostCard>
    );
  }
}

export default Post;
