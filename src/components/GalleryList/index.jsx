import React from "react";
import ImageCard from "./ImageCard";

const ImageSection = ({ photos, handleToggleFavourite }) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4 sm:px-[30px] xl:px-[80px]">
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
