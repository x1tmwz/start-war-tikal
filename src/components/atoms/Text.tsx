import React, { ReactNode } from "react";

type TextProps = {
  Type: "span" | "p" ;
  className?: "regular" | "regular-bold";
  children?: ReactNode;
};

const Text = ({ Type,className,children }: TextProps) => {
  return <Type className={className}>{children}</Type>;
};

export default Text;
