const moment = require("moment");
import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

function PostCard(props) {
  // save the post from the props
  const post = props.post;
  const time = moment(post.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a");

  return (
    <div>
      <h2>{post.userID} posted:</h2>
      <p>(at {time})</p>
      <Card className="mb-3">
        <CardImg top width="100%" src={post.picture} />
        <CardBody>
          <CardText>
            {post.likes} <i className="fas fa-heart" />
          </CardText>
          <Button className="float-right">
            <i className="fas fa-hand-holding-heart" />
          </Button>
          <CardTitle>Goal: {post.goalID}</CardTitle>
          <CardText>{post.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default PostCard;
