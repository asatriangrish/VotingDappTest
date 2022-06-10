import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { VotingFactory, VotingPoll } from "../typechain";

describe("VotingFactory", async function () {
  let votingFactory: VotingFactory;
  let votingPoll: VotingPoll;
  let polls;

  const titles = ["Education", "Economy", "Science", "Sport"];
  let owner1: SignerWithAddress;
  let owner2: SignerWithAddress;
  let voter1: SignerWithAddress;
  let voter2: SignerWithAddress;

  it("Should return the new greeting once it's changed", async function () {
    const accounts = await ethers.getSigners();
    owner1 = accounts[1];
    owner2 = accounts[2];
    voter1 = accounts[3];
    voter2 = accounts[4];

    const VotingFactory = await ethers.getContractFactory("VotingFactory");
    votingFactory = await VotingFactory.deploy();
    await votingFactory.deployed();
    console.log("VotingFactory deployed to:", votingFactory.address);

    // const setGreetingTx = await votingFactory.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await votingFactory.greet()).to.equal("Hola, mundo!");

    // await votingFactory.createPoll("Education", ["A", "B", "C"]);
  });
  describe("Create Poll", function () {
    it("Creating poll failed with wrong options", async function () {
      await expect(
        votingFactory.connect(owner1).createPoll(titles[0], ["A"])
      ).to.revertedWith("Wrong Options");
    });

    it("Creating poll successful and return polls", async function () {
      await votingFactory
        .connect(owner1)
        .createPoll(titles[0], ["A", "B", "C"]);

      expect(await votingFactory.pollCount()).to.equal(1);

      polls = await votingFactory.getPolls();

      expect(polls.poll_addresses.length).to.equal(1);
      console.log(polls);

      const VotingPoll = await ethers.getContractFactory("VotingPoll");
      votingPoll = VotingPoll.attach(polls.poll_addresses[0]);
      expect(await votingPoll.title()).to.equal(titles[0]);
      expect(await votingPoll.owner()).to.equal(owner1.address);

      await votingFactory.connect(owner1).createPoll(titles[1], ["C", "D"]);

      expect(await votingFactory.pollCount()).to.equal(2);

      polls = await votingFactory.getPolls();

      expect(polls.poll_addresses.length).to.equal(2);
    });
  });

  describe("Vote", function () {
    it("Vote successfully", async function () {
      await votingPoll.connect(voter1).vote(1);
    });

    it("Already voted", async function () {
      await expect(votingPoll.connect(voter1).vote(2)).to.revertedWith(
        "This user has already voted."
      );
    });
  });
});
