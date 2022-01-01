import React, { ReactNode } from "react";

type LabelProps = {
  htmlFor?: string;
  className?:"star-wars"|"regular";
  children?: ReactNode;
};

const Label = ({ htmlFor,className="star-wars", children = null }: LabelProps) => {
  return <label className={className} htmlFor={htmlFor}>{children}</label>;
};

export default Label;
