import React from "react";
import { Routes, Route } from "react-router-dom";
import House from "../Components/House";
import Car from "../Components/Car";
import Motorbike from "../Components/Motarbike";
import { Box } from "@chakra-ui/react";

const RoutesBox = () => {
  return (
    <Box backgroundColor={"black"}>
      <Routes>
      <Route path="" element={<House />} />
      <Route path="Car" element={<Car />} />
      <Route path="Motorbike" element={<Motorbike />} />
      </Routes>
    </Box >
  );
};

export default RoutesBox;
