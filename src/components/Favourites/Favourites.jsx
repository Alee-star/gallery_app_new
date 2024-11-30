import React from "react";
import "./Favourites.css";
import ImageCard from "../Banner/ImageCard";

const Favourites = ({ photos }) => {
  return photos.length > 0 ? (
    photos.map((photo) => (
      <ImageCard key={photo.id} photo={photo} IsLike={photo.favourite} />
    ))
  ) : (
    <p>No Favourites</p>
  );
};

export default Favourites;
