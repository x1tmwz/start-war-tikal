import React from "react";
import Image from "../atoms/Image";

const StarWarsImage = () => {
  return (
    <div className="star-wars-logo">
      <Image
        src="./src/assets/icons/Star_Wars_Logo.png"
        alt="Star Wars"
        className={"m-size"}
      />
    </div>
  );
};
export default StarWarsImage