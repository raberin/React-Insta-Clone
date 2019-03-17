import React from "react";
import "./PostContainer.css";

import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "./PostHeader";

const Post = props => {
  return (
    <div className="post-container">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <img
        className="igPost"
        key={props.post.imageUrl}
        src={props.post.imageUrl}
        alt="instagram post"
      />
      <div className="comment-icons">
        <img
          className="commentIcons"
          src="https://img.icons8.com/windows/32/000000/hearts.png"
          height="35px"
          width="35px"
          alt="heart icon"
        />
        <img
          className="commentIcons"
          src="https://img.icons8.com/windows/32/000000/speech-bubble.png"
          height="35px"
          width="35px"
          alt="comment icons"
        />
      </div>
      <p className="like">
        <strong>{props.post.likes} likes</strong>
      </p>
      <CommentSection comments={props.post.comments} />
      <p className="timeStamp">{props.post.timestamp}</p>
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
              height="35px"
              width="35px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
