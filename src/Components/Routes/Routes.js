import React from "react";
import { Routes, Route } from "react-router-dom";
import House from "../Components/House";
import Car from "../Components/Car";
import Motorbike from "../Components/Motarbike";

const RoutesBox = () => {
  return (
    <div>
      <Routes>
      <Route path="House" element={<House />} />
      <Route path="Car" element={<Car />} />
      <Route path="Motorbike" element={<Motorbike />} />
      
      </Routes>
    </div>
  );
};

export default RoutesBox;
