import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type CustomLinkProps = {
  to: string;
  className: "main-nav";
  children?: ReactNode;
};

const CustomLink = ({ to, className, children = null }: CustomLinkProps) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default CustomLink;
