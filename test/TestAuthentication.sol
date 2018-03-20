pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Authentication.sol";
import "./helpers/ErrorProxy.sol";

contract TestAuthentication {

  function testUserCanSignUpAndLogin() {
    Authentication authentication = Authentication(DeployedAddresses.Authentication());

    authentication.signup('testuser');

    bytes32 expected = 'testuser';

    Assert.equal(authentication.login(), expected, "It signs up and logs in a user.");
  }

  function testUserCanUpdateName() {
    Authentication authentication = Authentication(DeployedAddresses.Authentication());

    bytes32 expected = 'new_name';

    Assert.equal(authentication.update('new_name'), expected, "It updates a user.");
  }

  function testLoginFailure() {
    Authentication authentication = new Authentication();
    ErrorProxy errorProxy = new ErrorProxy(address(authentication));

    Authentication(address(errorProxy)).login();

    bool r = errorProxy.execute.gas(200000)();

    Assert.isFalse(r, "Only existings users can log in.");
  }

  function testSignUpFailure() {
    Authentication authentication = new Authentication();
    ErrorProxy errorProxy = new ErrorProxy(address(authentication));

    Authentication(address(errorProxy)).signup('');

    bool r = errorProxy.execute.gas(200000)();

    Assert.isFalse(r, "Cannot sign up with invalid name.");
  }

  function testUpdateWithInvalidName() {
    Authentication authentication = new Authentication();
    ErrorProxy errorProxy = new ErrorProxy(address(authentication));

    Authentication(address(errorProxy)).update('');

    bool r = errorProxy.execute.gas(200000)();

    Assert.isFalse(r, "Cannot update user with invalid name.");
  }

  function testUpdateWithInvalidUser() {
    Authentication authentication = new Authentication();
    ErrorProxy errorProxy = new ErrorProxy(address(authentication));

    Authentication(address(errorProxy)).update('new_name');

    bool r = errorProxy.execute.gas(200000)();

    Assert.isFalse(r, "Cannot update non-existent user.");
  }

}
