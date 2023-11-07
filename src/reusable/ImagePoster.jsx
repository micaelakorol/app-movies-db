import React from "react";

const ImagePoster = ({src,className,alt}) => {
  return (
    <img
      src={src}
      className={className}
      alt={alt}
    />
  );
};

export default ImagePoster;
