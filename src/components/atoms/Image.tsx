import React from "react";

type ImageProps = {
  src: string;
  alt: string;
  className?: "s-size" | "m-size" | "l-size" | "xl-size";
};
const Image = ({ src, alt, className = "m-size" }: ImageProps) => {
  return <img className={className} src={src} alt={alt} />;
};
export default Image