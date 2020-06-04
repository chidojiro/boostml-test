import { combineReducers } from "redux";
import { favoriteImagesReducer } from "./favoriteImages";

export const rootReducer = combineReducers({
  favoriteImages: favoriteImagesReducer,
});
