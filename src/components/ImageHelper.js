import React from "react";
// import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImageHelper = ({ detail }) => {
  const imageurl = detail.image
    ? `https://soumenbj.pythonanywhere.com/images/${detail.image}`
    : `https://images.pexels.com/photos/5054776/pexels-photo-5054776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;

  return (
    <div className="">
      <a
        target="_self"
        href={`https://soumenbj.pythonanywhere.com/post/${detail.id}`}
      >
        <LazyLoadImage
          src={imageurl}
          style={{ maxWidth: "100%" }}
          className="mb-1"
          alt="image"
          effect="blur"
          placeholderSrc={`https://soumenbj.pythonanywhere.com/images/${detail.image}`}
        />
      </a>
    </div>
  );
};

export default ImageHelper;
