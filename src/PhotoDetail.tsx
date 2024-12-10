import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Photo } from "./types";

const PhotoDetail = () => {
  const { photoId } = useParams<{ photoId: string }>();
  const [photo, setPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    if (photoId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
        .then((response) => {
          setPhoto(response.data);
        })
        .catch((error) => {
          console.error("Error fetching photo details", error);
        });
    }
  }, [photoId]);

  if (!photo) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold">{photo.title}</h2>
      <img src={photo.url} alt={photo.title} className="max-w-full h-auto" />
      <p className="text-base font-medium">{photo.id}</p>
    </div>
  );
};

export default PhotoDetail;
