// Write a function to check if an object is empty or not in javaScript?
// How to check if an object is empty or not in javaScript?

const obj1 = {};
const obj2 = { key: 1 };

function isEmpty(obj) {
    // write your solution here
    // console.log(Object.keys(obj))
    // console.log(Object.values(obj))

    let x = Object.values(obj).length === 0;
    return x;
}

console.log(`is empty object: ${isEmpty(obj1)}`);
console.log(`is empty object: ${isEmpty(obj2)}`);
