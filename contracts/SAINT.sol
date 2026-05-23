// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import {ERC20Votes} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title $SAINT - The Conclave's Currency
 * @dev ERC20 with voting power for Governance + Permit for gasless approvals
 */
contract SAINT is ERC20, ERC20Permit, ERC20Votes, Ownable {
    constructor(address initialOwner) 
        ERC20("SAINT", "SAINT") 
        ERC20Permit("SAINT") 
        Ownable(initialOwner) 
    {
        // Initial supply: 1 Billion $SAINT
        _mint(initialOwner, 1_000_000_000 * 10 ** decimals());
    }

    // Required overrides
    function _update(address from, address to, uint256 value)
        internal
        override(ERC20, ERC20Votes)
    {
        super._update(from, to, value);
    }

    function nonces(address owner)
        public
        view
        override(ERC20Permit)
        returns (uint256)
    {
        return super.nonces(owner);
    }
}
