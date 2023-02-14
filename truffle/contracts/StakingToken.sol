// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./SampleToken.sol";

contract StakingToken is ERC20 {

    uint public deployTimestamp;
    SampleToken sampleToken;

    constructor(string memory tokenName, string memory tokenSymbol, address _sampleToken) ERC20(tokenName, tokenSymbol) {
        deployTimestamp = block.timestamp;
        sampleToken = SampleToken(_sampleToken);
    }

    function stake(uint amountInTOK) public {
        uint amountInSTA = amountInTOK / (((block.timestamp - deployTimestamp) / 1 hours) + 1);
        sampleToken.burn(msg.sender, amountInTOK);
        _mint(msg.sender, amountInSTA);
    }

    function unstake(uint amountInSTA) public {
        uint amountInTOK = amountInSTA * (((block.timestamp - deployTimestamp) / 1 hours) + 1);
        sampleToken.mint(msg.sender, amountInTOK);
        _burn(msg.sender, amountInSTA);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount) override internal {
        require(from == address(0) || to == address(0), "Staking: Transfer is not possible");
        super._beforeTokenTransfer(from, to, amount);
    }

}