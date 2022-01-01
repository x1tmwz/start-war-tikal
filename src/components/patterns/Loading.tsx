import React from "react";
import en from "../../assets/lang/en.json";
import Image from "../atoms/Image";
import Title from "../atoms/Title";

type LoadingProps = {
  isLoading: boolean;
};
const Loading = ({ isLoading }: LoadingProps) => {
  return (
    <>
      {isLoading ? (
        <div>
          <Image
            src={"./src/assets/icons/loading.gif"}
            alt={""}
            className="l-size"
          />
          <Title Type="h2" className="star-wars">
            Loading...
          </Title>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default Loading;
