import React, { ReactNode } from "react";

type LabelProps = {
  htmlFor: string;
  children?: ReactNode;
};

const Label = ({ htmlFor, children = null }: LabelProps) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
