// Create a regular expression to validate if the given input is valid Indian mobile number or not
// Regular expression check has to have an optional +91 or 0 in the beginning, then an optional space and 10 digits
// test method of regular expression can be used to validate if the mobile number pattern matches or not

const number1 = '+919876543210';
const number2 = '+91 9876543210';
const number3 = '09876543210';
const number4 = '9876543210';
const number5 = '99876543210';

function validateMobile(number) {
    // write your solution here
    const regex = new RegExp('^(\\+91|0)? ?\\d{10}$');
    let res = regex.test(number);
    return res;
}

console.log(`is a valid Indian mobile number: ${validateMobile(number1)}`);
console.log(`is a valid Indian mobile number: ${validateMobile(number2)}`);
console.log(`is a valid Indian mobile number: ${validateMobile(number3)}`);
console.log(`is a valid Indian mobile number: ${validateMobile(number4)}`);
console.log(`is a valid Indian mobile number: ${validateMobile(number5)}`);




// validateMobile('+919876543210') returns true
// validateMobile('+91 9876543210') returns true
// validateMobile('09876543210') returns true
// validateMobile('9876543210') returns true
// validateMobile('99876543210') returns false