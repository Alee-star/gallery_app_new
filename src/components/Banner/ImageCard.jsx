import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "../Button.css";
import "./ImageCard.css";

const ImageCard = ({ photo, isLike, addToFavourites }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="image-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card">
        <Link to={`/photo/${photo.id}`} className="card-link">
          <img src={photo.url} alt={photo.title} className="card-image" />
        </Link>
      </div>
      {hovered && (
        <div className="hover-part">
          <ul className="hover-top">
            <li className="hover-icon">
              <Button
                className="icon-image"
                label={<img src="/assets/copy.svg" alt="Copy icon" />}
              />
            </li>
            <li className="hover-icon">
              <Button
                className={`icon-image ${isLike ? "liked" : ""}`}
                label={<img src="/assets/like.svg" alt="Like icon" />}
                onClick={() => addToFavourites(photo)}
              />
            </li>
          </ul>
          <div className="hover-bottom">
            <div className="hover-title">
              <span className="title-text">{photo.title}</span>
            </div>
            <div className="download-part">
              <Button
                className="download-button"
                label={<img src="/assets/download.svg" alt="Download icon" />}
              />
              <span className="download-text">Download</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
