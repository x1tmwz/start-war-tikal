import React, { ReactNode } from "react";

type TitleProps = {
  Type: "h1" | "h2" | "h3";
  className?: "star-wars" | "regular" | "regular-bold";
  children?: ReactNode;
};

const Title = ({
  Type,
  className = "regular",
  children = null,
}: TitleProps) => {
  return <Type className={className}>{children}</Type>;
};

export default Title;
