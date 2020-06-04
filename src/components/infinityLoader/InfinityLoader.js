import React from "react";

const _onscroll = window.onscroll;

export const InfinityLoader = ({ onLoad }) => {
  const ref = React.useRef();
  React.useEffect(() => {
    window.onscroll = () => {
      const isInView =
        window.innerHeight >= ref.current.getBoundingClientRect().top;
      if (isInView) {
        onLoad();
      }
    };
    return () => {
      window.onscroll = _onscroll;
    };
  });
  return <div ref={ref}></div>;
};
