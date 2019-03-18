import React from "react";
import "../PostContainer/PostContainer.css";

const CommentInput = props => {
  return (
    <div className="addCommentSection">
      <div className="borderTop" />
      <div className="addCommentDiv">
        <form onSubmit={props.addNewComment}>
          <input
            className="addCommentInput"
            type="text"
            placeholder="Add a comment..."
            name="Input Field"
            onChange={props.inputChangeHandler}
          />
        </form>

        <div className="threeDotsIcon">
          <img
            alt="three dots"
            src="https://img.icons8.com/windows/32/000000/more.png"
            height="35px"
            width="35px"
          />
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
