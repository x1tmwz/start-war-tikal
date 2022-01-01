import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BestVehiclePage from "../pages/BestVehiclePage";
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
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
