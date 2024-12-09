import React, { useEffect, useState } from "react";
import axios from "axios";
import GalleryList from "../../components/GalleryList";
import { getFavFromLocalStorage, toggleFavourite } from "../../ToggleFunction";

const Photos = ({ searchTerm }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        const favouriteIds = getFavFromLocalStorage().map((fav) => fav.id);
        const photosWithFavourites = response.data
          .slice(0, 20)
          .map((photo) => ({
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

  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <GalleryList
      photos={filteredPhotos}
      handleToggleFavourite={handleToggleFavourite}
    />
  );
};

export default Photos;
