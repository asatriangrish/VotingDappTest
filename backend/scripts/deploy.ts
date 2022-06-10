import {ethers} from "hardhat";

const deploy = async (name: string, ...args: any) => {
  const Registry = await ethers.getContractFactory(name);
  const registry = await Registry.deploy(...args);
  await registry.deployed();
  console.log(`${name} deployed to:`, registry.address);
  return registry;
};

async function deployProc() {
  const factory = await deploy("VotingFactory");
  await factory.createPoll("Education", ["Voting By Mail", "Early Voting"]);
  await factory.createPoll("Economy", ["Voting By Mail", "Election Day Voting"]);
  await factory.createPoll("Science", ["Voting By Mail", "Election Day Voting", "Early Voting"]);
  let polls = await factory.getPolls();
  console.log("polls===============>", polls);

}

deployProc()