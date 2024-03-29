// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.7.4;
pragma experimental ABIEncoderV2;

import "./openzeppelin/SafeMath.sol";
import "./openzeppelin/TimelockController.sol";

contract Timelock is TimelockController {
    using SafeMath for uint256;

    constructor(
        uint256 delayTime,
        address[] memory proposers,
        address[] memory executors
    ) TimelockController(delayTime, proposers, executors) {}
}