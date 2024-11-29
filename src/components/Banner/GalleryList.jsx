import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageHover from "./ImageHover";
import "./GalleryList.css";

const ImageSection = () => {
  const [photos, setPhotos] = useState([]);
  const [hovered, setHovered] = useState(null);

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
        <div
          className="image-card"
          key={photo.id}
          onMouseEnter={() => setHovered(photo.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="card">
            <img src={photo.url} alt={photo.title} className="card-img" />
          </div>
          {hovered === photo.id && <ImageHover />}
        </div>
      ))}
    </div>
  );
};

export default ImageSection;
