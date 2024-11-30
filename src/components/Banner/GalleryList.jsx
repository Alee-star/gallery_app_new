import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageHover from "./ImageHover";
import Favourites from "../Favourites/Favourites";
import "../Favourites/Favourites.css";
import "./GalleryList.css";

const ImageSection = ({ activeTab }) => {
  const [photos, setPhotos] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [favourites, setfavourites] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setPhotos(response.data.slice(0, 20));
      })
      .catch((error) => {
        console.error("Error in fetching photos", error);
      });
  }, []);

  const addToFavourites = (photo) => {
    setfavourites((prevFavourites) => {
      if (!prevFavourites.some((fav) => fav.id === photo.id)) {
        return [...prevFavourites, photo];
      }
      return prevFavourites;
    });
  };

  return (
    <div className="image-section">
      {activeTab === "Favourites" ? (
        <Favourites favourites={favourites} />
      ) : (
        photos.map((photo) => (
          <div
            className="image-card"
            key={photo.id}
            onMouseEnter={() => setHovered(photo.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="card">
              <img src={photo.url} alt={photo.title} className="card-img" />
            </div>
            {hovered === photo.id && (
              <ImageHover IsLike={() => addToFavourites(photo)} />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ImageSection;
