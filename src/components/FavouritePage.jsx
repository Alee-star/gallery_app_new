import React, { useEffect, useState } from "react";
import Favourites from "./Favourites/Favourites";
import Navbar from "./Navbar/Navbar";
import "../components/Banner/GalleryList.css";
import { getFavFromLocalStorage } from "../ToggleFunction";

const FavouritePage = ({ toggleFavourite }) => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  useEffect(() => {
    const favouritePhotosData = getFavFromLocalStorage();
    setFavouritePhotos(favouritePhotosData || []);
  }, []);

  const handleToggleFavourite = (photo) => {
    toggleFavourite(photo);
    const updatedFavourites = getFavFromLocalStorage();
    setFavouritePhotos(updatedFavourites);
  };

  return (
    <>
      <Navbar />
      <div className="image-section">
        <Favourites
          photos={favouritePhotos}
          addToFavourites={handleToggleFavourite}
        />
      </div>
    </>
  );
};

export default FavouritePage;
