import * as React from "react";
import { Text, Button, Input, Flex, Center } from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa";
export const Header = () => {
  return (
    <Center mt={10}>
      <header>
        <div>
          <Text fontSize="5xl">👋 Sushi's Wave Portal! 🍣</Text>
          <Text fontSize="2xl">Try and Wave me! Using Rinkeby Testnet</Text>
        </div>
        <div>
          <Flex mx="auto" mt={12} maxW="2xl">
            <Input placeholder="Drop a Message!" size="md"></Input>
          </Flex>
        </div>
        <div className="button">
          <Button leftIcon={<FaEthereum />}>Wave</Button>
        </div>
      </header>
    </Center>
  );
};
