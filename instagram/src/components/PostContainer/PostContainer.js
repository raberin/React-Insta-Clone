import React from "react";
import "./PostContainer.css";

import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return props.dummyData.map(post => (
    <div className="post-container">
      <div className="logoAndUsername">
        <h2>{post.username}</h2>
        <img src={post.thumbnailUrl} alt="profile" />
      </div>
      <img src={post.imageUrl} alt="instagram post" />
      <div className="comment-icons">
        <img
          className="commentIcons"
          src="https://img.icons8.com/windows/32/000000/hearts.png"
          height="29px"
          width="29px"
          alt="heart icon"
        />
        <img
          className="commentIcons"
          src="https://img.icons8.com/windows/32/000000/speech-bubble.png"
          height="29px"
          width="29px"
          alt="comment icons"
        />
      </div>
      <p>
        <strong>{post.likes}</strong> likes
      </p>
      <CommentSection dummyDataComments={post.comments} />
      <p>{post.timestamp}</p>
      <input type="text" placeholder="Add a comment..." />
    </div>
  ));
};

export default PostContainer;
