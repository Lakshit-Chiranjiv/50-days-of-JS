// WeIrD StRiNg CaSe
// Write a function toWeirdCase that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

function toWeirdCase(string) {
  // Your code goes here
  let arr = string.split(' ');
  let retstr = '',wrd;
  for(let i =0;i<arr.length;i++)
  {
      wrd='';
      for(let j=0;j<arr[i].length;j++)
          wrd += (j%2===0)?arr[i][j].toUpperCase():arr[i][j].toLowerCase();
      retstr += wrd + ' ';
  }
  retstr = retstr.slice(0,retstr.length-1);
  return retstr;
}

console.log(
  `The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
);
