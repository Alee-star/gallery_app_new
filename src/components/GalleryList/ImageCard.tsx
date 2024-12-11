import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import { Photo } from "../../types";

interface ImageCardProps {
  photo: Photo;
  isLike: boolean;
  addToFavourites: (photo: Photo) => void;
}

const ImageCard = ({ photo, isLike, addToFavourites }: ImageCardProps) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full">
        <Link to={`/photo/${photo.id}`} className="flex h-full">
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      {hovered && (
        <div className="w-full h-full">
          <ul className="absolute top-3 right-4 flex gap-2 list-none z-2">
            <li>
              <Button
                className="flex items-center justify-center w-10 h-10 bg-white rounded-xl"
                label={
                  <img
                    src="/assets/copy.svg"
                    alt="Copy icon"
                    className="w-6 h-6 text-text-gray"
                  />
                }
              />
            </li>
            <li>
              <Button
                className={`flex items-center justify-center w-10 h-10 rounded-xl ${
                  isLike ? "bg-like-red" : "bg-white"
                }`}
                label={
                  <img
                    src="/assets/like.svg"
                    alt="Like icon"
                    className="w-6 h-6 text-text-gray"
                  />
                }
                onClick={() => addToFavourites(photo)}
              />
            </li>
          </ul>
          <div className="absolute bottom-3 right-0 left-0 max-w-full flex justify-between items-center">
            <div className="flex aligns-center justify-start w-1/2 pl-5 text-left overflow-hidden">
              <span className="block text-base font-bold leading-6 text-white overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                {photo.title}
              </span>
            </div>
            <div className="relative flex items-center justify-center h-12 p-3 cursor-pointer text-white bg-button-green border-button-green rounded-100">
              <Button
                className="flex items-center justify-center border-none bg-button-green"
                label={
                  <img
                    src="/assets/download.svg"
                    alt="Download icon"
                    className="h-6 w-6 bg-button-green"
                  />
                }
              />
              <span className="text-base font-semibold leading-tight tracking-normal text-white">
                Download
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
