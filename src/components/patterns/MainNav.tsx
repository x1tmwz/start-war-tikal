import React from "react";
import CustomLink from "../atoms/CustomLink";

interface Url {
  path: string;
  text: string;
}

type MainNavProps = {
  urls: Url[];
};

const MainNav = ({ urls }: MainNavProps) => {
  return (
    <nav>
      {urls.map((url) => (
        <CustomLink to={url.path} className="main-nav" key={url.path}>
          {url.text}
        </CustomLink>
      ))}
    </nav>
  );
};

export default MainNav;
