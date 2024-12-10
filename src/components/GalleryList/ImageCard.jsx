import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const ImageCard = ({ photo, isLike, addToFavourites }) => {
  const [hovered, setHovered] = useState(false);

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
                    className="w-6 h-6 text-textGray"
                  />
                }
              />
            </li>
            <li>
              <Button
                className={`flex items-center justify-center w-10 h-10 rounded-xl ${
                  isLike ? "bg-likeRed" : "bg-white"
                }`}
                label={
                  <img
                    src="/assets/like.svg"
                    alt="Like icon"
                    className="w-6 h-6 text-textGray"
                  />
                }
                onClick={() => addToFavourites(photo)}
              />
            </li>
          </ul>
          <div className="absolute bottom-3 right-0 left-0 max-w-full flex justify-between items-center">
            <div className="flex aligns-center justify-start w-1/2 pl-5 text-left overflow-hidden">
              <span className="block test-base font-bold leading-6 text-white overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                {photo.title}
              </span>
            </div>
            <div className="relative flex items-center justify-center h-12 p-3 cursor-pointer text-white bg-buttonGreen border-buttonGreen rounded-100">
              <Button
                className="flex items-center justify-center border-none bg-buttonGreen"
                label={
                  <img
                    src="/assets/download.svg"
                    alt="Download icon"
                    className="w-6 h-6 bg-buttonGreen"
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
