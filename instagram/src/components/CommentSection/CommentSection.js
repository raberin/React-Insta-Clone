import React from "react";
import PropTypes from "prop-types";
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

CommentSection.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      )
    })
  )
};

export default CommentSection;
