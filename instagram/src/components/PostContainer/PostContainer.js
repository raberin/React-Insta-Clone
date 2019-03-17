import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";

import Post from "./Post";

const PostContainer = props => {
  return props.dummyData.map((post, index) => <Post post={post} key={index} />);
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
