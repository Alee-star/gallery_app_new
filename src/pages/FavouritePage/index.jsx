import React, { useState, useEffect } from "react";
import Favourites from "../../components/Favourites";
import { getFavFromLocalStorage, toggleFavourite } from "../../ToggleFunction";
import "../../components/Banner/GalleryList.css";

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
