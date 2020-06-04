import React from "react";

import { StyledImagesContainer } from "./ImagesContainer.styled";
import { ImageThumbnail } from "../imageThumbnail";

export const ImagesContainer = ({ images }) => (
  <StyledImagesContainer>
    {images.map((image) => (
      <ImageThumbnail key={image.id} image={image} />
    ))}
  </StyledImagesContainer>
);
