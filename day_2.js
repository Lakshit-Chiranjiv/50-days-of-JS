const str1 = "JavaScript is awesome";
const str2 = "Peter Parker is Spiderman";
const str3 = "codedamn";

function reverseAString(str) {
    // write your solution here
    let rev_str = str.split('').reverse().join('');
    return rev_str;
}

console.log(`Reversed string is: ${reverseAString(str1)}`);
console.log(`Reversed string is: ${reverseAString(str2)}`);
console.log(`Reversed string is: ${reverseAString(str3)}`);