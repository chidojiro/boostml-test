import React from "react";

export const InfinityLoader = ({ onLoad }) => {
  const _onscroll = window.onscroll;
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
