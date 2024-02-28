// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Upload {
    struct Access {
        address user;
        bool access; // true or false
    }
    mapping(address => string[]) value;
    mapping(address => mapping(address => bool)) ownership; // to store the sddresses of the users with access given with boolean
    mapping(address => Access[]) accessList; // to store the sddresses of the users with access given
    mapping(address => mapping(address => bool)) previousData;

    // address public deployedContractAddress;

    // event ContractDeployed(address indexed contractAddress);

    function add(address _user, string memory url) external {
        value[_user].push(url);
    }

    function allow(address user) external {
        ownership[msg.sender][user] = true;
        if (previousData[msg.sender][user]) {
            for (uint i = 0; i < accessList[msg.sender].length; i++) {
                if (accessList[msg.sender][i].user == user) {
                    accessList[msg.sender][i].access = true;
                }
            }
        } else {
            accessList[msg.sender].push(Access(user, true));
            previousData[msg.sender][user] = true;
        }
    }

    function disAllow(address user) public {
        ownership[msg.sender][user] = false;
        for (uint i = 0; i < accessList[msg.sender].length; i++) {
            if (accessList[msg.sender][i].user == user) {
                accessList[msg.sender][i].access = false;
            }
        }
    }

    //To display all the files or images
    function display(address _user) external view returns (string[] memory) {
        require(
            _user == msg.sender || ownership[_user][msg.sender],
            "You don't have access!!!"
        );
        return value[_user];
    }

    //List of shared persons
    function shareAccess() public view returns (Access[] memory) {
        // return accessList[msg.sender];

        uint256 count = 0;

        // Count the number of users with access set to true
        for (uint256 i = 0; i < accessList[msg.sender].length; i++) {
            if (accessList[msg.sender][i].access == true) {
                count++;
            }
        }

        // Create a new array to hold only the users with access set to true
        Access[] memory result = new Access[](count);
        count = 0;

        // Populate the result array with users with access set to true
        for (uint256 i = 0; i < accessList[msg.sender].length; i++) {
            if (accessList[msg.sender][i].access == true) {
                result[count] = accessList[msg.sender][i];
                count++;
            }
        }

        return result;
    }

    // function emitContractDeployedEvent(address _contractAddress) public {
    //     deployedContractAddress = _contractAddress;
    //     emit ContractDeployed(_contractAddress);
    // }
}
