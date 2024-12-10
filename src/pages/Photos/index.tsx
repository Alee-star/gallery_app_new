import React, { useEffect, useState } from "react";
import axios from "axios";

import GalleryList from "../../components/GalleryList";
import { getFavFromLocalStorage, toggleFavourite } from "../../ToggleFunction";
import { Photo } from "../../types";

interface PhotosProps {
  searchTerm: string;
}

const Photos = ({ searchTerm }: PhotosProps) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        const favouriteIds = getFavFromLocalStorage().map((fav) =>
          String(fav.id)
        );
        const photosWithFavourites: Photo[] = response.data
          .slice(0, 20)
          .map((photo: Photo) => ({
            ...photo,
            favourite: favouriteIds.includes(photo.id),
          }));
        setPhotos(photosWithFavourites);
      })
      .catch((error) => {
        console.error("Error in fetching photos", error);
      });
  }, []);

  const handleToggleFavourite = (photo: Photo) => {
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
