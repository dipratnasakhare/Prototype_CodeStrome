import { Box, Center, Flex, Select, Stack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const CalculaterNav = () => {
  return (
    <nav>
      <NavLink
        to="/House"
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
    </nav>
  );
};

export default CalculaterNav;
