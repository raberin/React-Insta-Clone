import React from "react";
import styled from "styled-components";

const PicAndUsernameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  margin-left: 1.5rem;
  margin: 2% 1.5%;
`;

const ProfilePic = styled.img`
  border-radius: 20px;
  margin-right: 10px;
  height: 35px;
  width: 35px;
`;

const PostHeader = props => {
  return (
    <div className="post-header">
      <PicAndUsernameDiv>
        <ProfilePic
          className="profilePic"
          src={props.thumbnailUrl}
          alt="profile"
        />
        <h2>
          <strong>{props.username}</strong>
        </h2>
      </PicAndUsernameDiv>
    </div>
  );
};

export default PostHeader;
