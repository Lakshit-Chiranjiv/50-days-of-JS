// Determine if a sentence is a pangram
// Instructions
// Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is:

// The quick brown fox jumps over the lazy dog.

// The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.

let sentence = 'The quick brown fox jumps over the lazy dog';

const isPangram = (input) => {
	// Code here
    input = input.toLowerCase();
    let arr = new Array(26).fill(0);
    input = input.split('');
    input.forEach((el) => {
        if(isNaN(el) && el!==' ')
            arr[el.charCodeAt(0) - 97]++;
    });

    let p = 0;
    arr.forEach((a) => {
        if(a===0)
            p=1;
    });
	return ((p===0)?true:false);
}

console.log(isPangram(sentence));