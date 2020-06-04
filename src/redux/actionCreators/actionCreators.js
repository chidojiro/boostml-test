import { actionTypes } from "../actions";

export const addToFavorites = (image) => ({
  type: actionTypes.ADD_TO_FAVORITES,
  payload: image,
});

export const removeFromFavorites = (image) => ({
  type: actionTypes.REMOVE_FROM_FAVORITES,
  payload: image,
});

export const loadFavoriteImages = () => {
  const favs = JSON.parse(localStorage.getItem("fav") || "[]");
  return {
    type: actionTypes.ADD_TO_FAVORITES,
    payload: favs,
  };
};
