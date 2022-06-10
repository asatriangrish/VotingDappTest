//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract VotingPoll {
    struct Vote {
        address voter;
        uint8 option;
    }

    string public title;
    address public owner;

    mapping (address => uint256) private votes;
    
    event Voted(address voter, uint256 option);

    constructor(
        string memory _title,
        address _owner
    ) {
        title = _title;
        owner = _owner;
    }

    function vote(uint256 _option) external {
        require(!hasVoted(msg.sender), "This user has already voted.");
        votes[msg.sender] = _option;

        emit Voted(msg.sender, _option);
    }

    function hasVoted(address _voter) public view returns (bool) {
        return votes[_voter] != 0;
    }
}
