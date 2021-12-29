import React, { ReactNode } from "react";

type ParagraphProps = {
  children?: ReactNode;
};

const Paragraph = ({ children }: ParagraphProps) => {
  return <p>{children}</p>;
};

export default Paragraph;
