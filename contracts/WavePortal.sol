//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {
    //  Instantiate Variables
    uint256 totalWaves;
    uint256 private seed;

    event newWave(address indexed from, uint256 timestamp, string message);

    struct Wave {
        address waver;
        string message;
        uint256 timestamp;
    }
    Wave[] waves;

    mapping(address => uint256) public lastWavedAt;

    constructor() {
        console.log("Welcome to Wave Contract!");
    }

    function wave(string memory _message) public {}

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("TOTAL WAVES", totalWaves);
        return totalWaves;
    }
}
