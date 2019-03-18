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

      <CommentSection
        comments={props.post.comments}
        timestamp={props.post.timestamp}
        likes={props.post.likes}
      />
    </div>
  );
};

export default Post;
