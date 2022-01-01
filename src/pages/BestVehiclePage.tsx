import React, { useEffect, useState } from "react";
import Title from "../components/atoms/Title";
import MainTemplate from "../components/templates/MainTemplate";
import customFetch from "../fetch/fetch";
import StarWars from "../services/StarWars.service";
import Table from "../components/patterns/Table";
import Chart from "../components/patterns/Chart";
import Loading from "../components/patterns/Loading";
import Image from "../components/atoms/Image";

const BestVehiclePage = () => {
  const [tableData, setTableData] = useState<{
    tableHeaders: any;
    values: any;
  }>({
    tableHeaders: [
      { text: "food", dataField: "type" },
      { text: "taste", dataField: "score" },
    ],
    values: [
      { type: "pizza", score: 200 },
      { type: "Hamburger", score: 300 },
    ],
  });

  const [chartData, setChartData] = useState<
    Array<{ value: number; name: string }>
  >([
    { value: 5000, name: "pizza" },
    { value: 2500, name: "hamburger" },
    { value: 3000, name: "salad" },
    { value: 500, name: "cola" },
  ]);
  useEffect(() => {
    const starWars = new StarWars(customFetch);
    const asyncFun = async () => {
      const tData =
        await starWars.getVehicleNamesWithTheHighestSumOfPopulation();
      const tableHeaders = [
        { text: "Vehicle name with the largest sum", dataField: "vehicle" },
        {
          text: "Related home planets and their respective population",
          dataField: "planets",
        },
        { text: "Related pilot names", dataField: "pilots" },
      ];
      const cData = await starWars.getAllSpecificPlanets();
      setChartData(() => cData);
      setTableData(() => ({ tableHeaders, values: [tData] }));
    };
    //asyncFun();
  }, []);
  return (
    <MainTemplate>
      <Image src="./src/assets/icons/star-wars-logos-icons.png" alt="Star Wars" className={"xl-size"} />

      <Loading isLoading={true} />
      <Table
        tableHeaders={tableData.tableHeaders}
        values={tableData.values}
      ></Table>
      <Chart data={chartData} />
    </MainTemplate>
  );
};

export default BestVehiclePage;
