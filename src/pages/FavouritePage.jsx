import React, { useState, useEffect } from "react";
import Favourites from "../components/Favourites/Favourites";
import "../components/Banner/GalleryList.css";
import { getFavFromLocalStorage, toggleFavourite } from "../ToggleFunction";

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
      <div className="image-section">
        <Favourites
          photos={favouritePhotos}
          addToFavourites={handleToggleFavourite}
        />
      </div>
    </div>
  );
};

export default FavouritePage;
