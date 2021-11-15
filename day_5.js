// Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'
// indexOf and lastIndexOf are the methods on String which returns the position of the given string in the input string from start and end respectively
// If the match is not found, these methods return -1

const str1 = 'XeroX';
const str2 = 'Xamarin';
const str3 = 'JavaScript';
const str4 = 'F(X) !== G(X) !== F(X)';

function getTheGapX(str) {
    // write your solution here
    let f = str.indexOf('X');
    let l = str.lastIndexOf('X');
    if(f===-1 && l===-1)
        return -1;
    
    return (l-f);
}

console.log(`Gap between the X's: ${getTheGapX(str1)}`);
console.log(`Gap between the X's: ${getTheGapX(str2)}`);
console.log(`Gap between the X's: ${getTheGapX(str3)}`);
console.log(`Gap between the X's: ${getTheGapX(str4)}`);