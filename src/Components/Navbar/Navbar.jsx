import React from "react";
import { Flex, Image, Select, Spacer, Stack, Option, WrapItem, Avatar } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Logo from "../Images/Logo.webp";

const Navbar = () => {
  return (
    <Box id="white" backgroundColor="#0c111f">
      <Flex backgroundColor={"black.300"} padding={"5px"} justifyContent={"space-between"}  gap={6}>
        <Box>
          <Image width={"120px"} src={Logo} alt="Dan Abramov" />{" "}
        </Box>
        {/* <Spacer /> */}
        <Flex gap={"5rem"}>
          <Box>
          <WrapItem>
            <Avatar
                  size='md'
              name="Kola Tioluwani"
              src="https://bit.ly/tioluwani-kolawole"
            />
          </WrapItem>
        </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
