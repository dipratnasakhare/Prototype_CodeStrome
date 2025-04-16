import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Grid gap={"5px"} >
      <Heading size={"3xl"} margin={"1rem"} color={"green.300"}>Carbon Footprint Calculator</Heading>
      <Box>
        <Text m={"15px"} backgroundColor={"green.300"} color={"green"}>Measure your impact on the envirnment 🌍</Text>
      </Box>
    </Grid>
  );
};

export default Home;
