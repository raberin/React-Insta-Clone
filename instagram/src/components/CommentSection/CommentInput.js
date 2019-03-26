import React from "react";
import "../PostContainer/PostContainer.css";
import styled from "styled-components";

const AddCommentSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 1.2rem;
`;

const AddCommentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const AddCommentForm = styled.form`
  width: 95%;
  margin-left: 1.5%;
  height: 3rem;
  font-size: 1.6rem;
`;

const ThreeDotsIconDiv = styled.div`
  width: 5%;
  display: flex;
  justify-content: flex-end;
  margin-right: 1.5%;
`;

const CommentInput = props => {
  return (
    <AddCommentSection>
      <div className="borderTop" />
      <AddCommentDiv>
        <AddCommentForm onSubmit={props.addNewComment}>
          <input
            className="addCommentInput"
            type="text"
            placeholder="Add a comment..."
            name="Input Field"
            onChange={props.inputChangeHandler}
          />
        </AddCommentForm>

        <ThreeDotsIconDiv className="threeDotsIcon">
          <img
            alt="three dots"
            src="https://img.icons8.com/windows/32/000000/more.png"
            height="35px"
            width="35px"
          />
        </ThreeDotsIconDiv>
      </AddCommentDiv>
    </AddCommentSection>
  );
};

export default CommentInput;
