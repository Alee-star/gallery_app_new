import React, { useState, useEffect } from "react";
import axios from "axios";
import { getFavFromLocalStorage, toggleFavourite } from "../../ToggleFunction";
import ImageCard from "./ImageCard";
import "../Favourites/Favourites.css";
import "./GalleryList.css";

const ImageSection = () => {
  const [photos, setPhotos] = useState([]);

  const getFavFromLocalStorage = () => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    return favourites;
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        const favouriteIds = getFavFromLocalStorage().map((fav) => fav.id);
        const photosWithFavourites = response.data.map((photo) => ({
          ...photo,
          favourite: favouriteIds.includes(photo.id),
        }));
        setPhotos(photosWithFavourites);
      })
      .catch((error) => {
        console.error("Error in fetching photos", error);
      });
  }, []);

  const handleToggleFavourite = (photo) => {
    const currentFavourites = getFavFromLocalStorage();
    const updatedFavourites = toggleFavourite(photo, currentFavourites);
    const updatedPhotos = photos.map((currentPhoto) =>
      currentPhoto.id === photo.id
        ? { ...currentPhoto, favourite: !currentPhoto.favourite }
        : currentPhoto
    );
    setPhotos(updatedPhotos);
  };

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
