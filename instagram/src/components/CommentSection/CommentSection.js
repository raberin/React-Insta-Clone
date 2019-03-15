import React from "react";
import "./CommentSection.css";

const CommentSection = props => {
  return (
    <div className="comment-container">
      {props.dummyDataComments.map(comment => {
        return (
          <div className="comment">
            <p>
              <strong>{comment.username}</strong> {comment.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentSection;
