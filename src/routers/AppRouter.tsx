import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BestVehiclePage from "../pages/BestVehiclePage";
import PlanetsChartPage from "../pages/PlanetsChartPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BestVehiclePage />} />
        <Route path="/planets" element={<PlanetsChartPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
