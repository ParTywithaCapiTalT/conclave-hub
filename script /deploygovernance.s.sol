// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/console.sol";
import {SAINT} from "../contracts/SAINT.sol";
import {ConclaveStaking} from "../contracts/ConclaveStaking.sol";
import {ConclaveGovernor} from "../contracts/ConclaveGovernor.sol";
import {TimelockController} from "@openzeppelin/contracts/governance/TimelockController.sol";
import {IVotes} from "@openzeppelin/contracts/governance/utils/IVotes.sol";

contract DeployGovernance is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        address deployer = vm.addr(deployerPrivateKey);

        // === CONFIGURATION ===
        address saintTokenAddress = vm.envOr("SAINT_TOKEN_ADDRESS", address(0));
        
        if (saintTokenAddress == address(0)) {
            console.log("❌ SAINT_TOKEN_ADDRESS not set. Deploy token first or set env var.");
            revert("Missing SAINT token address");
        }

        // 1. Deploy TimelockController (2-day delay)
        address[] memory proposers = new address[](1);
        proposers[0] = deployer;

        address[] memory executors = new address[](1);
        executors[0] = address(0); // Open execution after delay

        TimelockController timelock = new TimelockController(
            2 days,           // minDelay
            proposers,
            executors,
            deployer          // admin
        );

        console.log("✅ Timelock deployed at:", address(timelock));

        // 2. Deploy ConclaveGovernor
        ConclaveGovernor governor = new ConclaveGovernor(
            IVotes(saintTokenAddress),
            timelock
        );

        console.log("✅ Governor deployed at:", address(governor));

        // 3. Setup Governance Permissions
        timelock.grantRole(timelock.PROPOSER_ROLE(), address(governor));
        timelock.revokeRole(timelock.PROPOSER_ROLE(), deployer);

        console.log("✅ Governor granted PROPOSER_ROLE on Timelock");

        // 4. (Optional) Deploy Staking if needed
        ConclaveStaking staking = new ConclaveStaking(saintTokenAddress);
        console.log("✅ Staking deployed at:", address(staking));

        // Transfer ownerships to Timelock (recommended)
        // SAINT(saintTokenAddress).transferOwnership(address(timelock));
        // staking.transferOwnership(address(timelock));

        vm.stopBroadcast();

        // Final Summary
        console.log("\n🎉 === CONCLAVE GOVERNANCE DEPLOYED ===");
        console.log("SAINT Token:", saintTokenAddress);
        console.log("TimelockController:", address(timelock));
        console.log("ConclaveGovernor:", address(governor));
        console.log("ConclaveStaking:", address(staking));
    }
}