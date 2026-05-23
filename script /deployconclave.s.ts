// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Script} from "forge-std/Script.sol";
import {SAINT} from "../contracts/SAINT.sol";
import {ConclaveStaking} from "../contracts/ConclaveStaking.sol";
import {ConclaveGovernor} from "../contracts/ConclaveGovernor.sol";
import {TimelockController} from "@openzeppelin/contracts/governance/TimelockController.sol";

contract DeployConclave is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        address deployer = vm.addr(deployerPrivateKey);

        // 1. Deploy $SAINT Token
        SAINT saint = new SAINT(deployer);

        // 2. Deploy Timelock (2 day delay)
        address[] memory proposers = new address[](1);
        proposers[0] = deployer; // Temporary - will be replaced by Governor
        address[] memory executors = new address[](1);
        executors[0] = address(0); // Anyone can execute after delay

        TimelockController timelock = new TimelockController(
            2 days,    // Minimum delay
            proposers,
            executors,
            deployer   // Admin
        );

        // 3. Deploy Governor
        ConclaveGovernor governor = new ConclaveGovernor(
            IVotes(address(saint)),
            timelock
        );

        // 4. Deploy Staking Contract
        ConclaveStaking staking = new ConclaveStaking(address(saint));

        // 5. Setup Permissions
        timelock.grantRole(timelock.PROPOSER_ROLE(), address(governor));
        timelock.revokeRole(timelock.PROPOSER_ROLE(), deployer);

        // Transfer token ownership to Timelock
        saint.transferOwnership(address(timelock));

        // Transfer staking ownership to Timelock
        staking.transferOwnership(address(timelock));

        vm.stopBroadcast();

        // Log addresses for frontend integration
        console.log("SAINT Token:", address(saint));
        console.log("Timelock:", address(timelock));
        console.log("Governor:", address(governor));
        console.log("Staking:", address(staking));
    }
}