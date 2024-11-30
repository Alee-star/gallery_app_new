import React, { useState } from "react";
import Button from "../Button";
import "../Button.css";
import "./ImageHover.css";

const ImageHover = ({ IsLike }) => {
  const [isLiked, setIsLiked] = useState(false);

  const likeHandleClick = () => {
    if (!isLiked) {
      IsLike();
    }
    setIsLiked(true);
  };

  return (
    <div className="hover-part">
      <ul className="hover-top">
        <li className="hover-icon">
          <Button
            className="icon-image"
            label={<img src="/assets/copy.svg" alt="copy" />}
          ></Button>
        </li>
        <li className="hover-icon">
          <Button
            className={`icon-image ${isLiked ? "liked" : ""}`}
            label={<img src="/assets/like.svg" alt="like" />}
            onClick={likeHandleClick}
          ></Button>
        </li>
      </ul>
      <div className="hover-bottom">
        <div className="download-part">
          <Button
            className="download-button"
            label={<img src="/assets/download.svg" alt="download" />}
          ></Button>
          <span className="download-text">Download</span>
        </div>
      </div>
    </div>
  );
};

export default ImageHover;
