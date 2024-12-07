import React from "react";
import ImageCard from "./ImageCard";
import "./GalleryList.css";

const ImageSection = ({ photos, handleToggleFavourite }) => {
  return (
    <div className="gallery-list">
      <div className="image-section">
        {photos.map((photo) => (
          <ImageCard
            key={photo.id}
            photo={photo}
            addToFavourites={handleToggleFavourite}
            isLike={photo.favourite}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
