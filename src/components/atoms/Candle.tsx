import React from "react";

type CandleProps = {
  size: number;
};

const Candle = ({ size }: CandleProps) => {
  return (
    <div
      className="candle"
      style={{ height: size > 0 ? 20 + size + "px" : 0 + "px" }}
    ></div>
  );
};

export default Candle;
