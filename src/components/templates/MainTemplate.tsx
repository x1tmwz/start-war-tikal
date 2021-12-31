import React, { ReactNode, useState } from "react";

type MainTemplateProps = {
  children?: ReactNode;
};
const MainTemplate = ({ children }: MainTemplateProps) => {
  return <div className="main-template">{children}</div>;
};

export default MainTemplate;
