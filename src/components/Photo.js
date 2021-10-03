import React from "react";
import "./Photo.css";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Photo = ({ url }) => {
  const [loaded, setLoaded] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    // Intersection Observer gets triggered before the image enters the viewport.
    // This gives the image a chance to be loaded before the user even sees it.
    rootMargin: "200px 0px",
  });
  return (
    <div className="photo-container" ref={ref}>
      {inView ? (
        <img
          className="photo"
          alt="placeholder"
          src={url}
          style={loaded ? {} : { display: "none" }}
          onLoad={() => setLoaded(true)}
        />
      ) : null}

      {loaded ? null : <div className="skeleton"></div>}
    </div>
  );
};

export default Photo;
