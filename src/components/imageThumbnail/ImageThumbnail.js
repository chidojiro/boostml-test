import React from "react";
import { HeartFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import { StyledImageThumbnail } from "./ImageThumbnail.styled";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/actionCreators";

export const ImageThumbnail = ({ image }) => {
  const dispatch = useDispatch();
  const favoriteImages = useSelector((state) => state.favoriteImages);

  const isFavorite = favoriteImages.some(
    (favoriteImage) => favoriteImage.id === image.id
  );

  const handleHeartClick = () => {
    if (!isFavorite) {
      dispatch(addToFavorites(image));
    } else {
      dispatch(removeFromFavorites(image));
    }
  };

  return (
    <StyledImageThumbnail>
      <img src={image.previewURL} alt="" />
      <HeartFilled
        onClick={handleHeartClick}
        className={`${isFavorite ? "active" : ""}`}
      />
    </StyledImageThumbnail>
  );
};
