import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Navbar = ({ setCurrentAccount, currentAccount }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const account = currentAccount;

  console.log("Account", account);

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("No Wallet detected! Go get Some!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("You are connected to the matrix.. Loading", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log("Something Happened! Error Connecting Wallet:", error);
    }
  };

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        px={{ base: "4", md: "8" }}
      >
        <Flex
          h={20}
          alignItems={"center"}
          justifyContent={"space-between"}
          mx="auto"
          maxW="7xl"
        >
          <Box>Sushii Wave</Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              {!account && (
                <Button onClick={connectWallet}>Connect Wallet</Button>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
