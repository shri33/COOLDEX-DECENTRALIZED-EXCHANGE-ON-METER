// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; // Update to match the version in your Truffle configuration

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor(uint256 initialSupply) ERC20("MyToken", "MTK") {
        _mint(msg.sender, initialSupply);
    }
}
