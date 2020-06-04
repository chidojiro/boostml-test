import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ImageBrowser } from "./components/imageBrowser";
import { FavoriteImages } from "./components/favoriteImages";
import { ImageDetail } from "./components/imageDetail";
import { StyledApp } from "./App.styled";
import { loadFavoriteImages } from "./redux/actionCreators";

import "antd/dist/antd.css";

export const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadFavoriteImages());
  });

  return (
    <StyledApp>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ImageBrowser} />
          <Route path="/image/:id" component={ImageDetail} />
          <Route path="/favorites" component={FavoriteImages} />
        </Switch>
      </BrowserRouter>
    </StyledApp>
  );
};
