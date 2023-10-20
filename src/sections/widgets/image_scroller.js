import React from "react";

const ImageScroller = (props) => {
  const images = props.images;

  return (
    <div className="image-scroller">
      {images.map((image, index) => (
        <img
          className="scrolling-image"
          key={index}
          src={image}
          alt={`Brand ${index}`}
        />
      ))}
      {images.map((image, index) => (
        <img
          className="scrolling-image"
          key={index + images.length}
          src={image}
          alt={`Brand ${index}`}
        />
      ))}
      {images.map((image, index) => (
        <img
          className="scrolling-image"
          key={index + images.length}
          src={image}
          alt={`Brand ${index}`}
        />
      ))}
      {images.map((image, index) => (
        <img
          className="scrolling-image"
          key={index + images.length}
          src={image}
          alt={`Brand ${index}`}
        />
      ))}
    </div>
  );
};

export default ImageScroller;
