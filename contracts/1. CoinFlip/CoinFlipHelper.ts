import { expect } from "chai";
import { ethers } from "hardhat";

const oneMinute = 60;

const helper = async (victim: any, attacker: any) => {
  // add code here that will help you pass the test
    for(let i = 0; i < 10; i++) {
        await attacker.hackContract();
        // next block
        await ethers.provider.send('evm_increaseTime', [oneMinute]);
        await ethers.provider.send('evm_mine', []);
    }
};

export default helper;
