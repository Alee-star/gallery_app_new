import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import Favourites from "../Favourites/Favourites";
import Navbar from "../Navbar/Navbar";
import "../Favourites/Favourites.css";
import "./GalleryList.css";

const ImageSection = ({}) => {
  const [photos, setPhotos] = useState([]);
  const [selectedNavItem, setSelectedNavItem] = useState("Home");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        const photosWithFavourites = response.data.map((photo) => ({
          ...photo,
          favourite: false,
        }));
        setPhotos(photosWithFavourites);
      })
      .catch((error) => {
        console.error("Error in fetching photos", error);
      });
  }, []);

  const addToFavourites = (photoId) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) =>
        photo.id === photoId ? { ...photo, favourite: !photo.favourite } : photo
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
          <Favourites photos={photos.filter((photo) => photo.favourite)} />
        ) : (
          photos.map((photo) => (
            <ImageCard
              key={photo.id}
              photo={photo}
              addToFavourites={addToFavourites}
              IsLike={photo.favourite}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ImageSection;
