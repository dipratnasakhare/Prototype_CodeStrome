import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>
      <Flex border={"1px"} padding={"5px"} templateColumns="repeat(5, 1fr)" gap={6}>
        <Box>Logo</Box>
        <Spacer />
        <Box>Select</Box>
        <Box></Box>
        <Box></Box>
        <Box>Profile</Box>
      </Flex>
    </div>
  );
};

export default Navbar;
