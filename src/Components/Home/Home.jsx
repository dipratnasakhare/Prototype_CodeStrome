import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Grid gap={"5px"} >
      <Heading margin={"1rem"} color={"green.300"}>Carbon Calculator</Heading>
      

      <Box>
        <Text>🌍 Show You Care — Offset Your Carbon Footprint</Text>
       
      </Box>
    </Grid>
  );
};

export default Home;
