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
      timestamp: props.timestamp,
      comment: ""
    };
  }
  //addNewComment method 1 (TodoList method)
  //Utilizes the spread operator and adds the comment to end of array
  addNewComment = event => {
    event.preventDefault();
    let newComment = {
      username: "raberin",
      text: this.state.comment
    };
    this.setState({
      comments: [...this.state.comments, newComment],
      comment: ""
    });
    event.target.reset();
  };
  //addNewComment method 2 pushes the newComment into end of array
  // addNewComment = event => {
  //   event.preventDefault();
  //   let newComment = {
  //     username: "raberin",
  //     text: this.state.comment
  //   };
  //   let comments = this.state.comments;
  //   comments.push(newComment);
  //   this.setState({
  //     comments: comments,
  //     comment: ""
  //   });
  //   event.target.reset();
  // };

  inputChangeHandler = event => {
    this.setState({ comment: event.target.value });
  };

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
        <CommentInput
          addNewComment={this.addNewComment}
          inputChangeHandler={this.inputChangeHandler}
          value={this.state.comment}
        />
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
