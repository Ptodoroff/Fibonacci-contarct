const Fib = artifacts.require('Fib');

contract('Fibonacci', (accounts) => {
  let fibonacci = null;
  before(async () => {
    fibonacci = await Fib.deployed();
  });

  it('should calculate fibonacci sequence', async () => {
    const result = await fibonacci.fib(10);
    assert(result.toNumber() === 55);
  });
});