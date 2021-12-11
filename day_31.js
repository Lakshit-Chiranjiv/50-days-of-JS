// Write a Program to Find the Factorial of a Number
// The factorial of a number is the product of all the numbers from 1 to that number. For example,

// factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120.

// The factorial of a positive number n is given by:

// factorial of n (n!) = 1 * 2 * 3 * 4.....n The factorial of negative numbers do not exist and the factorial of 0 is 1.

function factorial(n) {
	// write your code here
    if(n===0 || n===1)
        return 1;
	return factorial(n-1) * n;
}

let n = 4;
console.log("The factorial of " + n + " is " + factorial(n));