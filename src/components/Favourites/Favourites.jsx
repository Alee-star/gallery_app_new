import React from "react";
import "./Favourites.css";

const Favourites = ({ favourites }) => {
  return (
    <div className="favourites">
      <div className="favourite-images">
        {favourites.length === 0 ? (
          <p>No Favourites</p>
        ) : (
          favourites.map((fav) => (
            <img
              src={fav.url}
              key={fav.id}
              alt={fav.title}
              className="fav-image"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favourites;
