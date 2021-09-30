import React from "react";
import "./Photo.css";
import { useInView } from "react-intersection-observer";

const Photo = ({ thumbnailUrl }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    // Intersection Observer gets triggered before the image enters the viewport.
    // This gives the image a chance to be loaded before the user even sees it.
    rootMargin: "200px 0px",
  });
  return (
    <div className="photo-container" ref={ref}>
      {inView ? (
        <img className="photo" alt="placeholder" src={thumbnailUrl} />
      ) : null}
      {/* <img className="photo" alt="placeholder" src={thumbnailUrl} /> */}
    </div>
  );
};

export default Photo;
