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
} from '@chakra-ui/react';

const Motorbike = () => {
  const [distance, setDistance] = useState(); // miles per year
  const [efficiency, setEfficiency] = useState(); // mpg
  const [emission, setEmission] = useState(0);

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
            onChange={(e) => setEfficiency(Number(e.target.value))}
          />
        </FormControl>
        </Box>

        <Box textAlign="center" mt={6} p={4} bg="gray.700" borderRadius="md">
          <Text fontSize="xl" color="green.300">
            CO₂: {emission} metric tons/year
          </Text>
        </Box>
      </Flex>
    </Center>
  );
};

export default Motorbike;
