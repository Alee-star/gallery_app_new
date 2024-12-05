import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PhotoDetail.css";

const PhotoDetail = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => {
        setPhoto(response.data);
      })
      .catch((error) => {
        console.error("Error fetching photo details", error);
      });
  }, []);

  if (!photo) return <div>Loading...</div>;

  return (
    <div className="photo-detail">
      <h2>{photo.title}</h2>
      <img src={photo.url} alt={photo.title} />
      <p>{photo.id}</p>
    </div>
  );
};

export default PhotoDetail;
