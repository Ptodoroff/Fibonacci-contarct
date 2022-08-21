pragma solidity 0.8.14;
contract Fib {

function fib (uint _n) external pure returns (uint) {
    if (_n == 0) {
        return 0;
    }
    else if (_n ==1 || _n ==2) {
        return 1;
    }

    else {
            uint first = 1;
            uint second = 1;
        for ( uint i =0; i<_n-2; i++){
            uint result = first + second;
            second = first;
            first=result;

        }
        return  first;
    }

}
}