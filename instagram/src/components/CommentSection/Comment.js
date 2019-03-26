import React from "react";
import "./CommentSection.css";
import styled from "styled-components";

const CommentDiv = styled.div`
  margin: 1.5% 1.5%;
`;

const Comment = props => {
  return (
    <CommentDiv>
      <p>
        <strong>{props.username}</strong> {props.text}
      </p>
    </CommentDiv>
  );
};

export default Comment;
