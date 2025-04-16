import { Box, Center, Flex, Select, Stack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const CalculaterNav = () => {
  return (
    <Box mt={"1px"} backgroundColor={"black"}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "BorderOn" : "BorderOff")}
      >
        House
      </NavLink>
      <NavLink
        to="/Car"
        className={({ isActive }) => (isActive ? "BorderOn" : "BorderOff")}
      >
        Car
      </NavLink>

      <NavLink
        to="/Motorbike"
        className={({ isActive }) => (isActive ? "BorderOn" : "BorderOff")}
      >
        Motorbike
      </NavLink>
    </Box>
  );
};

export default CalculaterNav;
