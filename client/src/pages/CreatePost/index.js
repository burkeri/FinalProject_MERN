import React from "react";
import ReactUploadImage from "../../components/ReactUploadForm";
import { Container } from "reactstrap";

function CreatePost(props) {
  return (
    <Container>
      <ReactUploadImage />
    </Container>
  );
}

export default CreatePost;
