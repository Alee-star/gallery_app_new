import React from "react";
import "./Favourites.css";
import ImageCard from "../Banner/ImageCard";

const Favourites = ({ photos, addToFavourites }) => {
  return photos.length > 0 ? (
    photos.map((photo) => (
      <ImageCard
        key={photo.id}
        photo={photo}
        IsLike={photo.favourite}
        addToFavourites={addToFavourites}
      />
    ))
  ) : (
    <p>No Favourites</p>
  );
};

export default Favourites;
