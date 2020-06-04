import React from "react";
import { HeartFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import { StyledImageThumbnail } from "./ImageThumbnail.styled";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/actionCreators";
import { Link } from "react-router-dom";

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
      <Link to={`image/${image.id}`}>
        <img src={image.previewURL} alt="" />
      </Link>
      <HeartFilled
        onClick={handleHeartClick}
        className={`${isFavorite ? "active" : ""}`}
      />
    </StyledImageThumbnail>
  );
};
