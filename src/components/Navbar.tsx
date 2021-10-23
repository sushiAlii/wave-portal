import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.900")} px={{ base: "4", md: "8" }}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"} mx="auto" maxW="7xl">
          <Box>Sushii Wave</Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button>Connect Wallet</Button>
            </Stack>    
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
