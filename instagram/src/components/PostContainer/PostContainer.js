import React from "react";
import "./PostContainer.css";

import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return props.dummyData.map(post => (
    <div className="post-container">
      <h2>{post.username}</h2>
      <img src={post.thumbnailUrl} alt="profile" />
      <img src={post.imageUrl} alt="instagram post" />
      <p>{post.likes}</p>
      <p>{post.timestamp}</p>
      <CommentSection dummyDataComments={post.comments} />
    </div>
  ));
};

export default PostContainer;
