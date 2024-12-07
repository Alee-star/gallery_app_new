import React, { useState, useEffect } from "react";
import GalleryList from "../../components/GalleryList";
import { getFavFromLocalStorage, toggleFavourite } from "../../ToggleFunction";

const FavouritePage = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  useEffect(() => {
    const favouritePhotosData = getFavFromLocalStorage();
    setFavouritePhotos(favouritePhotosData);
  }, []);

  const handleToggleFavourite = (photo) => {
    const currentFavourites = getFavFromLocalStorage();
    const updatedFavourites = toggleFavourite(photo, currentFavourites);
    setFavouritePhotos(updatedFavourites);
  };

  return (
    <div>
      <GalleryList
        photos={favouritePhotos}
        handleToggleFavourite={handleToggleFavourite}
      />
    </div>
  );
};

export default FavouritePage;
