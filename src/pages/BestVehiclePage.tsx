import React, { useEffect, useState } from "react";
import Title from "../components/atoms/Title";
import MainTemplate from "../components/templates/MainTemplate";
import customFetch from "../fetch/fetch";
import StarWars from "../services/StarWars.service";
import Table from "../components/patterns/Table";
import Chart from "../components/patterns/Chart";
import Loading from "../components/patterns/Loading";
import StarWarsImage from "../components/patterns/StarWarsImage";
const BestVehiclePage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [tableData, setTableData] = useState<{
    tableHeaders: any;
    values: any;
  }>({
    tableHeaders: [],
    values: [],
  });
  const [chartData, setChartData] = useState<
    Array<{ value: number; name: string }>
  >([]);
  useEffect(() => {
    const starWars = new StarWars(customFetch);
    const asyncFun = async () => {
      setLoading(true);
      try {
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
      } catch (e) {
        alert(e);
      } finally {
        setLoading(false);
      }
    };
    asyncFun();
  }, []);
  return (
    <MainTemplate>
      <StarWarsImage />
      <Loading isLoading={loading} />
      {loading || (
        <>
          <Table
            tableHeaders={tableData.tableHeaders}
            values={tableData.values}
          ></Table>
          <Chart data={chartData} />
        </>
      )}
    </MainTemplate>
  );
};

export default BestVehiclePage;
