// Function which returns a random number in the given range
// Create a function which returns a random number in the given range of values both inclusive

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
    let random_number = Math.floor(Math.random() * (rangeEnd - rangeStart + 1) ) + rangeStart;
	return random_number;
}

console.log(`My random number: ${randomNumberGeneratorInRange(10, 50)}`);
console.log(`My random number: ${randomNumberGeneratorInRange(100, 200)}`);
