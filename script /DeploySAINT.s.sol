// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../contracts/SAINT.sol";

contract DeploySAINT is Script {
    function run() external {
        vm.startBroadcast();
        
        // Replace with your desired initial owner (e.g. a Safe multisig)
        address initialOwner = msg.sender;
        
        SAINT saint = new SAINT(initialOwner);
        
        console.log("$SAINT deployed at:", address(saint));
        
        vm.stopBroadcast();
    }
}
