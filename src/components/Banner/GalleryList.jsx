import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import "./GalleryList.css";

const ImageSection = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error("Error in fetching photos", error);
      });
  }, []);

  return (
    <div className="image-section">
      {photos.map((photo) => (
        <ImageCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default ImageSection;
