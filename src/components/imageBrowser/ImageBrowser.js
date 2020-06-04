import React, { useEffect } from "react";
import { Input, Button } from "antd";

import { fetchImages, searchForImages } from "../../apiClients";
import { StyledImageBrowser, SearchBox } from "./ImageBrowser.styled";
import { Link } from "react-router-dom";
import { ImagesContainer } from "../imagesContainer";
import { InfinityLoader } from "../infinityLoader";

export const ImageBrowser = () => {
  const [search, setSearch] = React.useState("");
  const [images, setImages] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  const performFetchMoreImages = React.useCallback(async () => {
    const newImages = await fetchImages(currentPage);
    setImages([...images, ...newImages]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const performSearchForImages = React.useCallback(async () => {
    const images = await searchForImages(search);
    setImages(images);
  }, [search]);

  useEffect(() => {
    performFetchMoreImages();
  }, [performFetchMoreImages]);

  return (
    <StyledImageBrowser>
      <h1>Images Library</h1>
      <Button className="fav-navigator">
        <Link to="favorites">Favorite Images</Link>
      </Button>
      <SearchBox>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onPressEnter={performSearchForImages}
        />
        <Button type="primary" onClick={performSearchForImages}>
          Search
        </Button>
      </SearchBox>
      <ImagesContainer images={images} />
      <InfinityLoader onLoad={() => setCurrentPage(currentPage + 1)} />
    </StyledImageBrowser>
  );
};
