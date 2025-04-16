import React, { useState, useEffect } from 'react';
import {
  Box,
  Input,
  Heading,
  Text,
  VStack,
  FormLabel,
  FormControl,
  Flex,
  Center,
} from '@chakra-ui/react';

const House = () => {
  const [electricity, setElectricity] = useState(); // kWh/month
  const [gas, setGas] = useState(); // therms/month
  const [water, setWater] = useState(); // gallons/day

  const [footprint, setFootprint] = useState(0);

  useEffect(() => {
    const electricityAnnual = electricity * 12 * 0.000707;
    const gasAnnual = gas * 12 * 0.0053;
    const waterAnnual = (water * 365 / 1000) * 0.0015;

    const total = electricityAnnual + gasAnnual + waterAnnual;
    setFootprint(total.toFixed(2));
  }, [electricity, gas, water]);

  return (
    <Center p={6} borderRadius="md">
      <Flex boxShadow={"lg"} padding={"20px"}  gap={"1rem"} spacing={4} align="stretch">
        <Box > <FormControl>
          <FormLabel>Electricity Usage (kWh/month)</FormLabel>
          <Input
            type="number"
            value={electricity}
            onChange={(e) => setElectricity(Number(e.target.value))}
            placeholder="e.g., 400"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Natural Gas Usage (therms/month)</FormLabel>
          <Input
            type="number"
            value={gas}
            onChange={(e) => setGas(Number(e.target.value))}
            placeholder="e.g., 30"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Water Usage (gallons/day)</FormLabel>
          <Input
            type="number"
            value={water}
            onChange={(e) => setWater(Number(e.target.value))}
            placeholder="e.g., 100"
          />
        </FormControl></Box>

        <Box mt={6} p={4} bg="gray.700" borderRadius="md" textAlign="center">
          <Text fontSize="2xl" color="green.300">
            {footprint && 0} metric tons CO₂ / year
          </Text>
        </Box>

      </Flex>
    </Center>
  );
};

export default House;
