// Write a program to reverse a given integer number
// The remainder of the number can be fetched and the number can be divided by 10 to remove the the digit in loop till number becomes 0
// A simple approach to reverse a number could also be to convert it in to a string and then reverse it

const num1 = 3849;
const num2 = 2222;
const num3 = 1002;

function reverseGivenInteger(num) {
    // write your solution here
    let st = num.toString();
    let rev_num = st.split('').reverse().join('');
    return Number(rev_num);
}

console.log(`Reversed integer is: ${reverseGivenInteger(num1)}`);
console.log(`Reversed integer is: ${reverseGivenInteger(num2)}`);
console.log(`Reversed integer is: ${reverseGivenInteger(num3)}`);
