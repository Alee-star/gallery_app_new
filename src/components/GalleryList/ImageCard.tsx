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
          <ul className="absolute z-2 top-[10px] right-[15px] flex gap-[8px] list-none">
            <li>
              <Button
                className="bg-white flex items-center justify-center w-[40px] h-[40px] rounded-[10px]"
                label={
                  <img
                    src="/assets/copy.svg"
                    alt="Copy icon"
                    className="w-[24px] h-[24px] text-[#4a4a4a]"
                  />
                }
                onClick={() => {}}
              />
            </li>
            <li>
              <Button
                className={`flex items-center justify-center w-[40px] h-[40px] rounded-[10px] ${
                  isLike ? "bg-[#f50707]" : "bg-white"
                }`}
                label={
                  <img
                    src="/assets/like.svg"
                    alt="Like icon"
                    className="w-[24px] h-[24px] text-[#4a4a4a]"
                  />
                }
                onClick={() => addToFavourites(photo)}
              />
            </li>
          </ul>
          <div className="absolute bottom-[10px] right-0 left-0 max-w-full flex justify-between items-center">
            <div className="flex aligns-center justify-start text-left w-1/2 pl-[20px] overflow-hidden">
              <span className="max-w-full text-[16px] font-bold leading-[26px] text-white overflow-hidden text-ellipsis whitespace-nowrap block">
                {photo.title}
              </span>
            </div>
            <div className="text-white bg-[#05a081] border-[#05a081] p-[10px] h-[50px] rounded-[100px] cursor-pointer flex items-center justify-center relative">
              <Button
                className="flex items-center justify-center border-none bg-[#05a081]"
                label={
                  <img
                    src="/assets/download.svg"
                    alt="Download icon"
                    className="h-[24px] w-[24px] bg-[#05a081]"
                  />
                }
                onClick={() => {}}
              />
              <span className="text-[16px] font-semibold tracking-[-0.015em] text-white leading-[1.3] pr-[10px]">
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
