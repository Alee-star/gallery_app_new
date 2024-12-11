import { Photo } from "./types";

export const getFavFromLocalStorage = () => {
  const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
  return favourites;
};

export const saveFavInLocalStorage = (favourites: any) => {
  localStorage.setItem("favourites", JSON.stringify(favourites));
};

export const toggleFavourite = (
  photo: Photo,
  currentFavourites: Photo[]
): Photo[] => {
  const updatedFavourites = currentFavourites.some((fav) => fav.id === photo.id)
    ? currentFavourites.filter((fav) => fav.id !== photo.id)
    : [...currentFavourites, photo];

  saveFavInLocalStorage(updatedFavourites);
  return updatedFavourites;
};
