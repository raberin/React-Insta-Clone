import React from "react";
import "./PostContainer.css";

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="picAndUsername">
        <img
          className="profilePic"
          src={props.thumbnailUrl}
          alt="profile"
          height="35px"
          width="35px"
        />
        <h2>
          <strong>{props.username}</strong>
        </h2>
      </div>
    </div>
  );
};

export default PostHeader;
