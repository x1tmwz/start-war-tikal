import React, { useEffect, useState } from "react";
import ChartCandle from "./ChartCandle";

interface ChartData {
  name: string;
  value: number;
}
type ChartProps = {
  data: ChartData[];
};
const Chart = ({ data }: ChartProps) => {
  const [highestValue, setHighestValue] = useState(() => {
    return data.reduce((prev, current) => {
      prev = prev < current.value ? current.value : prev;
      return prev;
    }, 0);
  });
  useEffect(() => {
    setHighestValue(() =>
      data.reduce((prev, current) => {
        prev = prev < current.value ? current.value : prev;
        return prev;
      }, 0)
    );
  }, [data]);

  return (
    <div className="chart">
      {data.map((item) => {
        const size = Math.ceil((item.value / highestValue) * 100);
        return (
          <ChartCandle
            size={size}
            upperText={item.value}
            text={item.name}
            key={item.name}
          />
        );
      })}
    </div>
  );
};

export default Chart;
