import React from "react";
import Label from "../atoms/Label";
import Candle from "../atoms/Candle";

type ChartCandleProps = {
  size: number;
  upperText:number;
  text: string;
};

const ChartCandle = ({ size, text,upperText }: ChartCandleProps) => {
  return (
    <div className="chart-candle">
      <Label>{upperText}</Label>
      <Candle size={size} />
      <Label>{text}</Label>
    </div>
  );
};
export default ChartCandle
