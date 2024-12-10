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
          <ul className="absolute z-2 top-3 right-4 flex gap-2 list-none">
            <li>
              <Button
                className="bg-white flex items-center justify-center w-40 h-40 rounded-10"
                label={
                  <img
                    src="/assets/copy.svg"
                    alt="Copy icon"
                    className="w-24 h-24 text-textGray"
                  />
                }
                onClick={() => {}}
              />
            </li>
            <li>
              <Button
                className={`flex items-center justify-center w-40 h-40 rounded-10 ${
                  isLike ? "bg-likeRed" : "bg-white"
                }`}
                label={
                  <img
                    src="/assets/like.svg"
                    alt="Like icon"
                    className="w-24 h-24 text-textGray"
                  />
                }
                onClick={() => addToFavourites(photo)}
              />
            </li>
          </ul>
          <div className="absolute bottom-3 right-0 left-0 max-w-full flex justify-between items-center">
            <div className="flex aligns-center justify-start text-left w-1/2 pl-5 overflow-hidden">
              <span className="max-w-full text-4 font-bold leading-6 text-white overflow-hidden text-ellipsis whitespace-nowrap block">
                {photo.title}
              </span>
            </div>
            <div className="text-white bg-buttonGreen border-buttonGreen p-3 h-50 rounded-100 cursor-pointer flex items-center justify-center relative">
              <Button
                className="flex items-center justify-center border-none bg-buttonGreen"
                label={
                  <img
                    src="/assets/download.svg"
                    alt="Download icon"
                    className="h-24 w-24 bg-buttonGreen"
                  />
                }
                onClick={() => {}}
              />
              <span className="text-4 font-semibold tracking-normal text-white leading-tight ">
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
