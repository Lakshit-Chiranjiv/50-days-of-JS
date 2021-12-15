// Write a JavaScript function to get nth largest element from an unsorted array.
// Input
// nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4)
// Output
// 89

function nthlargest(arr, highest) {
	// write your code here
    arr.sort((a, b)=>(a-b));
    console.log(arr);
	return arr[(arr.length-highest)];
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652];
const highest = 4;

console.log(nthlargest(arr, highest));
console.log(nthlargest([ 10, 100, 1000, 10000], 2));
console.log(nthlargest([ 1, 4, 6, 10], 2))