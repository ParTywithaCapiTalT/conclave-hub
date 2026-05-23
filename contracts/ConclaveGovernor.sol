// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Governor} from "@openzeppelin/contracts/governance/Governor.sol";
import {GovernorSettings} from "@openzeppelin/contracts/governance/extensions/GovernorSettings.sol";
import {GovernorVotes} from "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import {GovernorTimelockControl} from "@openzeppelin/contracts/governance/extensions/GovernorTimelockControl.sol";
import {TimelockController} from "@openzeppelin/contracts/governance/TimelockController.sol";
import {IVotes} from "@openzeppelin/contracts/governance/utils/IVotes.sol";

/**
 * @title ConclaveGovernor
 * @notice Sovereign governance contract for the Conclave DAO
 * @dev $SAINT voting power directly influences protocol decisions
 */
contract ConclaveGovernor is Governor, GovernorSettings, GovernorVotes, GovernorTimelockControl {
    
    /**
     * @param _token $SAINT token address (ERC20Votes)
     * @param _timelock TimelockController address
     */
    constructor(
        IVotes _token,
        TimelockController _timelock
    )
        Governor("ConclaveGovernor")
        GovernorSettings(
            1,           // 1 block voting delay
            1 weeks,     // 1 week voting period
            0            // 0 proposal threshold (anyone with 1 vote can propose)
        )
        GovernorVotes(_token)
        GovernorTimelockControl(_timelock)
    {}

    // --- Required Overrides ---

    function votingDelay() 
        public 
        view 
        override(Governor, GovernorSettings) 
        returns (uint256) 
    {
        return super.votingDelay();
    }

    function votingPeriod() 
        public 
        view 
        override(Governor, GovernorSettings) 
        returns (uint256) 
    {
        return super.votingPeriod();
    }

    function quorum(uint256 blockNumber) 
        public 
        view 
        override(Governor) 
        returns (uint256) 
    {
        // 4% of total supply required for quorum (adjustable later via governance)
        return (totalSupply() * 4) / 100;
    }

    function proposalThreshold() 
        public 
        view 
        override(Governor, GovernorSettings) 
        returns (uint256) 
    {
        return super.proposalThreshold();
    }

    // Helper to get total supply from token
    function totalSupply() public view returns (uint256) {
        return token().getPastTotalSupply(block.number - 1);
    }
}