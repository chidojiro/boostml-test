import { actionTypes } from "../actions";
import { saveFavorites } from "../../apiClients";

export const favoriteImagesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_FAVORITES: {
      const newState = Array.isArray(payload)
        ? [...state, ...payload]
        : [...state, payload];

      saveFavorites(newState);

      return newState;
    }

    case actionTypes.REMOVE_FROM_FAVORITES: {
      const newState = state.filter((favImage) => favImage.id !== payload.id);
      saveFavorites(newState);
      return newState;
    }

    default:
      return state;
  }
};
