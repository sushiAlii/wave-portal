import "./App.css";
import { Footer } from "./components/Footer.tsx";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import WaveJSON from "./utils/WavePortal.json";

require("dotenv").config();

function App() {
  const [currentAccount, setCurrentAccount] = useState();
  const [message, setMessage] = useState("");
  const [totalWaves, setTotalWaves] = useState(0);
  const [allWaves, setAllWaves] = useState([]);

  const contractAddress = "0x8ee7E677f70845476432E18585Cc616a5Cb94248";
  const contractABI = WaveJSON.abi;

  const wave = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const waveTxn = await wavePortalContract.wave(message, {
          gasLimit: 300000,
        });
        console.log("Waving... Hash:", waveTxn.hash);
        await waveTxn.wait();
        console.log("Wave Done! Hash:", waveTxn.hash);

        let waveCount = await wavePortalContract.getTotalWaves().toNumber();
        console.log("Total Waves:", waveCount);
        setTotalWaves(waveCount);

        setMessage("");
      } else {
        console.log("No Ethereum Object To Wave.");
      }
    } catch (error) {
      console.log("Something Happened! Error Wave:", error);
    }
  };

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          console.log("No Metamask Wallet is Detected");
          return;
        } else {
          console.log("We have an ethereum object!", ethereum);
        }

        const accounts = await ethereum.request({ method: "eth_accounts" });
        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Got Account", accounts);
          setCurrentAccount(account);
        } else {
          console.log("ERROR 404: NO ACCOUNTS FOUND");
        }
      } catch (error) {
        console.log("Something Happened! Error Finding Wallet:", error);
      }
    };
    const checkWaveCount = async () => {
      try {
        const { ethereum } = window;
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const wavePortalContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );

          let waveCount = await wavePortalContract.getTotalWaves();
          console.log("%s have already waved!", waveCount.toNumber());
          setTotalWaves(waveCount);
          console.log(totalWaves);
        } else {
          console.log("No ethereum Object Found...");
        }
      } catch (error) {
        console.log("Retrieving Wave Count Error:", error);
      }
    };
    const getAllWaves = async () => {
      try {
        const { ethereum } = window;
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const wavePortalContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );

          const waves = await wavePortalContract.getAllWaves();

          var parsedWaves = [];

          waves.forEach((wave) => {
            parsedWaves.push({
              address: wave.waver,
              timestamp: new Date(wave.timestamp * 1000),
              message: wave.message,
            });
          });

          setAllWaves(parsedWaves);

          wavePortalContract.on("NewWave", (from, timestamp, message) => {
            console.log("NewWave", from, timestamp, message);

            setAllWaves((prevState) => [
              ...prevState,
              {
                address: from,
                timestamp: new Date(timestamp * 1000),
                message: message,
              },
            ]);
          });
        } else {
          console.log("No Ethereum Object...");
        }
      } catch (error) {
        console.log("Something Happened! Retrieving All Waves Error:", error);
      }
    };
    checkIfWalletIsConnected();
    checkWaveCount();
    getAllWaves();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="App font-link">
        <Navbar
          currentAccount={currentAccount}
          setCurrentAccount={setCurrentAccount}
        />
        <Header
          message={message}
          setMessage={setMessage}
          waves={allWaves}
          waveExecute={wave}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
