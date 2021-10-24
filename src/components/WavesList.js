import { Center, Text, useColorModeValue } from "@chakra-ui/react";

export const WavesList = ({ wave, index }) => {
  return (
    <Center
      mt={7}
      bg={useColorModeValue("red.300", "gray.900")}
      key={index}
      borderRadius="lg"
    >
      <Text fontSize="sm" padding={6}>
        <div>Address: {wave.address}</div>
        <div>Time: {wave.timestamp.toString()}</div>
        <div>Message: {wave.message}</div>
      </Text>
    </Center>
  );
};
