// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract SampleToken is ERC20, AccessControl {

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    constructor(string memory tokenName, string memory tokenSymbol, uint totalSupply) ERC20(tokenName, tokenSymbol) {
        _mint(msg.sender, totalSupply);
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function mint(address _to, uint _amount) public {
        require(hasRole(MINTER_ROLE, msg.sender), "SampleToken: You do not have the minter role");
        _mint(_to, _amount);
    }

    function burn(address _to, uint _amount) public {
        require(hasRole(BURNER_ROLE, msg.sender), "SampleToken: You do not have the burner role");
        _burn(_to, _amount);
    }

}