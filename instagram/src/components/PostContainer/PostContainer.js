import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";

import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return props.dummyData.map(post => (
    <div className="post-container">
      <div className="picAndUsername">
        <img
          className="profilePic"
          src={post.thumbnailUrl}
          alt="profile"
          height="32px"
          width="32px"
        />
        <h2>
          <strong>{post.username}</strong>
        </h2>
      </div>
      <img className="igPost" src={post.imageUrl} alt="instagram post" />
      <div className="comment-icons">
        <img
          className="commentIcons"
          src="https://img.icons8.com/windows/32/000000/hearts.png"
          height="32px"
          width="32px"
          alt="heart icon"
        />
        <img
          className="commentIcons"
          src="https://img.icons8.com/windows/32/000000/speech-bubble.png"
          height="32px"
          width="32px"
          alt="comment icons"
        />
      </div>
      <p className="like">
        <strong>{post.likes} likes</strong>
      </p>
      <CommentSection dummyDataComments={post.comments} />
      <p className="timeStamp">{post.timestamp}</p>
      <div className="addCommentSection">
        <div className="borderTop" />
        <div className="addCommentDiv">
          <input
            className="addCommentInput"
            type="text"
            placeholder="Add a comment..."
          />
          <div className="threeDotsIcon">
            <img
              alt="three dots"
              src="https://img.icons8.com/windows/32/000000/more.png"
              height="32px"
              width="32px"
            />
          </div>
        </div>
      </div>
    </div>
  ));
};

PostContainer.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string
    })
  )
};

export default PostContainer;
