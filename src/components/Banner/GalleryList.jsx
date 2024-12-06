import React, { useState, useEffect } from "react";
import axios from "axios";
import Favourites from "../Favourites/Favourites";
import ImageCard from "./ImageCard";
import "../Favourites/Favourites.css";
import "./GalleryList.css";
import { getFavFromLocalStorage, toggleFavourite } from "../../ToggleFunction";

const ImageSection = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedNavItem, setSelectedNavItem] = useState("Home");

  const getFavFromLocalStorage = () => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    return favourites;
  };

  const saveFavInLocalStorage = (favourites) => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        const photosWithFavourites = response.data.map((photo) => ({
          ...photo,
          favourite: getFavFromLocalStorage().some(
            (fav) => fav.id === photo.id
          ),
          favourite: getFavFromLocalStorage().some(
            (fav) => fav.id === photo.id
          ),
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
    const updatedPhotos = photos.map((p) =>
      p.id === photo.id ? { ...p, favourite: !p.favourite } : p
    );
    setPhotos(updatedPhotos);
  };

  const handleTabChange = (tab) => {
    setSelectedNavItem(tab);
  };

  const favouritePhotos = photos.filter((photo) => photo.favourite);

  return (
    <div className="gallery-list">
      <div className="image-section">
        {selectedNavItem === "Favourites" ? (
          <Favourites
            photos={favouritePhotos}
            addToFavourites={handleToggleFavourite}
          />
        ) : (
          photos.map((photo) => (
            <ImageCard
              key={photo.id}
              photo={photo}
              addToFavourites={handleToggleFavourite}
              IsLike={photo.favourite}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ImageSection;
