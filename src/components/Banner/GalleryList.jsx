import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Favourites from "../Favourites/Favourites";
import ImageCard from "./ImageCard";
import "../Favourites/Favourites.css";
import "./GalleryList.css";

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
        }));
        setPhotos(photosWithFavourites);
      })
      .catch((error) => {
        console.error("Error in fetching photos", error);
      });
  }, []);

  const toggleFavourite = (photo) => {
    const currentFavourites = getFavFromLocalStorage();
    const updatedFavourites = currentFavourites.some(
      (fav) => fav.id === photo.id
    )
      ? currentFavourites.filter((fav) => fav.id !== photo.id)
      : [...currentFavourites, photo];
    saveFavInLocalStorage(updatedFavourites);
    setPhotos((prevPhotos) =>
      prevPhotos.map((p) =>
        p.id === photo.id ? { ...p, favourite: !p.favourite } : p
      )
    );
  };

  const handleTabChange = (tab) => {
    setSelectedNavItem(tab);
  };

  return (
    <div className="gallery-list">
      <Navbar
        selectedNavItem={selectedNavItem}
        handleTabChange={handleTabChange}
      />
      <div className="image-section">
        {selectedNavItem === "Favourites" ? (
          <Favourites
            photos={photos.filter((photo) => photo.favourite)}
            addToFavourites={toggleFavourite}
          />
        ) : (
          photos.map((photo) => (
            <ImageCard
              key={photo.id}
              photo={photo}
              addToFavourites={toggleFavourite}
              IsLike={photo.favourite}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ImageSection;
