import React, { useState, useEffect } from "react";
import axios from "axios";
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
        <div className="image-card" key={photo.id}>
          <div className="card">
            <img src={photo.url} alt={photo.title} className="card-img" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSection;
