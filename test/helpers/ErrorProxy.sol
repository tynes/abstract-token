// Proxy contract for testing errors
// http://truffleframework.com/tutorials/testing-for-throws-in-solidity-tests

contract ErrorProxy {
  address public target;
  bytes data;

  function ErrorProxy(address _target) {
    target = _target;
  }

  //prime the data using the fallback function.
  function() {
    data = msg.data;
  }

  function execute() returns (bool) {
    return target.call(data);
  }
}