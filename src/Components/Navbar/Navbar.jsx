import React from "react";
import { Flex, Image, Select, Spacer, Stack, Option, WrapItem, Avatar } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Logo from "../Images/Logo.webp";

const Navbar = () => {
  return (
    <div>
      <Flex backgroundColor={"blackAlpha.300"} padding={"5px"} justifyContent={"space-around"}  gap={6}>
        <Box>
          <Image width={"40px"} src={Logo} alt="Dan Abramov" />{" "}
        </Box>
        {/* <Spacer /> */}
        <Flex gap={"5rem"}>
          <Box>
          <WrapItem>
            <Avatar
                  size='md'

              name="Kola Tioluwani"
              src="https://avatars.githubusercontent.com/u/107991169?v=4"
            />
          </WrapItem>
        </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
