import React from "react";
import ImageCard from "../Banner/ImageCard";
import "./Favourites.css";

const Favourites = ({ photos, addToFavourites }) => {
  if (!photos?.length) {
    return <p>No Favourites</p>;
  }

  return (
    <>
      {photos.map((photo) => (
        <ImageCard
          key={photo.id}
          photo={photo}
          IsLike={photo.favourite}
          addToFavourites={addToFavourites}
        />
      ))}
    </>
  );
};

export default Favourites;
