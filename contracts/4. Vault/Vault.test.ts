import { expect } from "chai";
import { ethers, waffle } from "hardhat";
import helper from "./VaultHelper";

let victim: any;
let attacker;

describe("Attacking Vault", function () {
  beforeEach(async () => {
    const Victim = await ethers.getContractFactory("Vault");
    victim = await Victim.deploy(
      ethers.utils.formatBytes32String("A very strong password")
    );
  });

  // Get this to pass!
  it("Succesfully unlock the vault", async () => {
    await helper();
    const locked = await victim.locked();
    expect(locked).to.be.equal(false);
  });
});