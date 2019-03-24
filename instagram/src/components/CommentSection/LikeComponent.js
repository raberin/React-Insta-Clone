import React from "react";
import "./CommentSection.css";

const LikeComponent = props => {
  return (
    <div>
      <div className="comment-icons">
        <img
          className={
            props.liked
              ? "display-none comment-icons"
              : "display-show comment-icons"
          }
          src="https://img.icons8.com/windows/32/000000/hearts.png"
          height="35px"
          width="35px"
          alt="heart icon"
          onClick={props.addLikeHandler}
        />
        <img
          className={
            props.liked
              ? "display-show comment-icons"
              : "display-none comment-icons"
          }
          src="https://img.icons8.com/color/30/000000/hearts.png"
          height="35px"
          width="35px"
          alt="heart icon"
          onClick={props.addLikeHandler}
        />
        <img
          className="commentIcons"
          src="https://img.icons8.com/windows/32/000000/speech-bubble.png"
          height="35px"
          width="35px"
          alt="comment icons"
        />
      </div>
      <div>
        <p className="like">
          <strong>{props.likes} likes</strong>
        </p>
      </div>
    </div>
  );
};

export default LikeComponent;
