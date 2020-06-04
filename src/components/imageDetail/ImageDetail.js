import React from "react";

import { StyledImageDetail } from "./ImageDetail.styled";
import { useParams } from "react-router";
import { fetchImageDetail } from "../../apiClients";

export const ImageDetail = () => {
  const [image, setImage] = React.useState(null);
  const { id } = useParams();

  const performFetchImageDetail = React.useCallback(async () => {
    const image = await fetchImageDetail(id);
    setImage(image);
  }, [id]);

  React.useEffect(() => {
    performFetchImageDetail();
  }, [performFetchImageDetail]);

  if (!image) return null;

  return (
    <StyledImageDetail>
      <h1>Image Detail</h1>
      <p>{`id: ${image.id}`}</p>
      <p>{`views: ${image.views}`}</p>
      <p>{`downloads: ${image.downloads}`}</p>
      <p>{`likes: ${image.likes}`}</p>
      <img src={image.largeImageURL} alt="" />
    </StyledImageDetail>
  );
};
