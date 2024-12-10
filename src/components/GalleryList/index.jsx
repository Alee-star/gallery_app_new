import React from "react";
import ImageCard from "./ImageCard";

const ImageSection = ({ photos, handleToggleFavourite }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:px-7 xl:px-20">
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
