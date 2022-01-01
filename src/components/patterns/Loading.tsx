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
        <Image
          src={"./src/assets/icons/loading.gif"}
          alt={"Loading..."}
          className="l-size"
        />
      ) : (
        ""
      )}
    </>
  );
};
export default Loading;
