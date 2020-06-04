import styled from "styled-components";

export const StyledImageThumbnail = styled.div`
  position: relative;
  display: inline-block;

  img {
    padding: 5px;
    width: 200px;
    height: 150px;
  }

  .anticon {
    position: absolute;
    left: 10px;
    top: 10px;
    color: white;
    cursor: pointer;

    &:hover,
    &.active {
      color: red;
    }
  }
`;
