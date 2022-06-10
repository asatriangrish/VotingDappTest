//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./VotingPoll.sol";

contract VotingFactory {
    struct Poll {
        address addr;
        address owner;
        string title;
        string[] options;
    }

    struct PollsReturn {
        address[] poll_addresses;
        address[] poll_owners;
        string[] poll_titles;
        uint256[] poll_ids;
        string[][] poll_options;
    }

    mapping(uint256 => Poll) public polls;
    uint256 public pollCount;

    event PollCreated(
        uint256 pollId,
        address owner,
        string title,
        string[] options
    );

    constructor() {}

    function createPoll(string memory _title, string[] memory options)
        external
    {
        require(options.length >= 2, "Wrong Options");

        VotingPoll votingPoll = new VotingPoll(_title, msg.sender);

        Poll storage newPoll = polls[pollCount];
        newPoll.addr = address(votingPoll);
        newPoll.owner = msg.sender;
        newPoll.title = _title;
        newPoll.options = options;

        emit PollCreated(pollCount, msg.sender, _title, options);

        pollCount++;
    }

    function getPolls() external view returns (PollsReturn memory) {
        address[] memory addresses = new address[](pollCount);
        address[] memory owners = new address[](pollCount);
        string[] memory titles = new string[](pollCount);
        uint256[] memory poll_ids = new uint256[](pollCount);
        string[][] memory option_list = new string[][](pollCount);

        for (uint256 i; i < pollCount; ) {
            addresses[i] = polls[i].addr;
            owners[i] = polls[i].owner;
            titles[i] = polls[i].title;
            poll_ids[i] = i;
            option_list[i] = polls[i].options;
            unchecked {
                i++;
            }
        }

        return PollsReturn(addresses, owners, titles, poll_ids, option_list);
    }
}
