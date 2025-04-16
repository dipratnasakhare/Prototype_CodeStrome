import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Input,
  FormControl,
  FormLabel,
  Flex,
  Center,
  Image,
} from '@chakra-ui/react';
import logo from "../Images/co2.jpg";

const Motorbike = () => {
  const [distance, setDistance] = useState(); // miles per year
  const [efficiency, setEfficiency] = useState(); // mpg
  const [emission, setEmission] = useState();

  useEffect(() => {
    const EMISSION_FACTOR = 7.2; // kg CO₂ per gallon for motorcycles

    if (distance > 0 && efficiency > 0) {
      const gallonsUsed = distance / efficiency;
      const totalCO2Kg = gallonsUsed * EMISSION_FACTOR;
      setEmission((totalCO2Kg / 1000).toFixed(2)); // metric tons
    } else {
      setEmission(0);
    }
  }, [distance, efficiency]);

  return (
    <Center  p={6} borderRadius="lg" >
      <Flex padding={"10px"} boxShadow="lg" gap={"1rem"} spacing={4} align="stretch">
        <Box>
        <FormControl>
          <FormLabel>Distance (miles/year)</FormLabel>
          <Input
            type="number"
            placeholder="e.g., 6000"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Fuel Efficiency (miles per gallon)</FormLabel>
          <Input
            type="number"
            placeholder="e.g., 50"
            value={efficiency}
            onChange={(e) => setEfficiency(e.target.value)}
          />
        </FormControl>
        </Box>

        <Box textAlign="center" mt={6} p={4} bg="#101820" borderRadius="md">
          <Center>
                      <Image src={logo} alt="Dan Abramov" />
                    </Center>

                          <Text fontSize="2xl">
                                {emission === "NaN" ? "0.00" : emission}{" "}
                              </Text>
          <Text fontSize="xl" color="green.300">
     metric tons/year
          </Text>
        </Box>
      </Flex>
    </Center>
  );
};

export default Motorbike;
