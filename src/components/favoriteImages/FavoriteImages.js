import React from "react";
import { useSelector } from "react-redux";

import { StyledFavoriteImages } from "./FavoriteImages.styled";
import { ImagesContainer } from "../imagesContainer";

export const FavoriteImages = () => {
  const favoriteImages = useSelector((state) => state.favoriteImages);
  return (
    <StyledFavoriteImages>
      <h1>Favorite Images</h1>
      <ImagesContainer images={favoriteImages} />
    </StyledFavoriteImages>
  );
};
