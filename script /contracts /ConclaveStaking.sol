// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract ConclaveStaking is ReentrancyGuard, Ownable {
    IERC20 public immutable saintToken;

    struct Stake {
        uint256 amount;
        uint256 startTime;
        uint256 lockDuration;     // in seconds
        uint256 multiplier;       // Ascension multiplier (1x - 3x)
        bool active;
    }

    mapping(address => Stake[]) public userStakes;
    uint256 public totalStaked;

    uint256 public constant BASE_APY = 5; // 5%
    uint256 public constant MAX_MULTIPLIER = 300; // 3x

    event Staked(address indexed user, uint256 amount, uint256 duration, uint256 multiplier);
    event Withdrawn(address indexed user, uint256 amount);

    constructor(address _saintToken) Ownable(msg.sender) {
        saintToken = IERC20(_saintToken);
    }

    function stake(uint256 amount, uint256 lockDays) external nonReentrant {
        require(amount > 0, "Cannot stake 0");
        require(lockDays >= 30 && lockDays <= 365, "Lock between 30-365 days");

        saintToken.transferFrom(msg.sender, address(this), amount);

        uint256 multiplier = calculateMultiplier(lockDays);

        userStakes[msg.sender].push(Stake({
            amount: amount,
            startTime: block.timestamp,
            lockDuration: lockDays * 1 days,
            multiplier: multiplier,
            active: true
        }));

        totalStaked += amount;

        emit Staked(msg.sender, amount, lockDays, multiplier);
    }

    function calculateMultiplier(uint256 daysLocked) public pure returns (uint256) {
        if (daysLocked <= 30) return 100;
        if (daysLocked >= 365) return MAX_MULTIPLIER;
        return 100 + ((daysLocked - 30) * 200 / 335);
    }

    function getUserStakes(address user) external view returns (Stake[] memory) {
        return userStakes[user];
    }
}
