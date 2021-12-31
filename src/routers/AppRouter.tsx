import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BestVehiclePage from "../pages/BestVehiclePage";
import PlanetsChartPage from "../pages/PlanetsChartPage";
import MainNav from "../components/patterns/MainNav";

const urls = [
  { path: "/", text: "Home" },
  { path: "/planets", text: "Planets" },
];
const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* <MainNav urls={urls} /> */}
      <Routes>
        <Route path="/" element={<BestVehiclePage />} />
        <Route path="/planets" element={<PlanetsChartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
