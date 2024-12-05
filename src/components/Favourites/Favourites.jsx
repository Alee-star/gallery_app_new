import React from "react";
import ImageCard from "../Banner/ImageCard";
import "./Favourites.css";
const Favourites = ({ photos = [], addToFavourites }) => {
  console.log("Photos in Favourites Component:", photos);
  if (!photos || photos.length === 0) {
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
