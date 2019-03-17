import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";

import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      timestamp: props.timestamp
    };
  }

  render() {
    return (
      <div className="comment-container">
        {this.state.comments.map((comment, index) => {
          return (
            <Comment
              key={index}
              username={comment.username}
              text={comment.text}
            />
          );
        })}
        <p className="timeStamp">{this.state.timestamp}</p>
        <CommentInput />
      </div>
    );
  }
}

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
