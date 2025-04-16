import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Text,
  Input,
  Select,
  FormControl,
  FormLabel,
  Center,
  Flex,
} from '@chakra-ui/react';

const CarCalculator = () => {
  const [distance, setDistance] = useState();
  const [efficiency, setEfficiency] = useState();
  const [fuelType, setFuelType] = useState('gasoline');
  const [emission, setEmission] = useState(0);

  useEffect(() => {
    const EMISSION_FACTORS = {
      gasoline: 8.89,
      diesel: 10.16,
    };

    if (distance > 0 && efficiency > 0) {
      const gallonsUsed = distance / efficiency;
      const totalCO2Kg = gallonsUsed * EMISSION_FACTORS[fuelType];
      setEmission((totalCO2Kg / 1000).toFixed(2)); 
    } else {
      setEmission(0);
    }
  }, [distance, efficiency, fuelType]);

  return (
    <Center  p={6} borderRadius="lg" >
      <Flex boxShadow={"lg"}  padding={"20px"} gap={"1rem"} spacing={4} align="stretch">
        <Box>
        <FormControl>
          <FormLabel>Distance (miles/year)</FormLabel>
          <Input
            type="number"
            placeholder="Enter annual distance"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Fuel Efficiency (mpg)</FormLabel>
          <Input
            type="number"
            placeholder="Enter fuel efficiency"
            value={efficiency}
            onChange={(e) => setEfficiency(Number(e.target.value))}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Fuel Type</FormLabel>
          <Select value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
            <option value="gasoline">Gasoline</option>
            <option value="diesel">Diesel</option>
          </Select>
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

export default CarCalculator;
