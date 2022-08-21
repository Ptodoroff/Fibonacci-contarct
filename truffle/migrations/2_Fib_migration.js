const Fib = artifacts.require("Fib");

module.exports = function (deployer) {
  deployer.deploy(Fib);
};
