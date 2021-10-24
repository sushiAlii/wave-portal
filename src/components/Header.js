import * as React from "react";
import { Text, Button, Input, Flex, Center } from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa";
import { WavesList } from "./WavesList";
export const Header = ({ waves, message, setMessage, waveExecute }) => {
  const handleInput = (event) => {
    setMessage(event.target.value);
    console.log(message);
  };

  return (
    <Center mt={10}>
      <header>
        <div>
          <Text fontSize="5xl">👋 Sushi's Wave Portal! 🍣</Text>
          <Text fontSize="2xl">Try and Wave me! Using Rinkeby Testnet</Text>
        </div>
        <div>
          <Flex mx="auto" mt={12} maxW="2xl">
            <Input
              placeholder="Drop a Message!"
              size="md"
              value={message}
              onChange={handleInput}
            ></Input>
          </Flex>
        </div>
        <div className="button">
          <Button onClick={waveExecute} leftIcon={<FaEthereum />}>
            Wave
          </Button>
        </div>
        {waves.map((wave, index) => {
          return (
            <Center key={index}>
              <WavesList wave={wave} index={index} />{" "}
            </Center>
          );
        })}
      </header>
    </Center>
  );
};
