// Longest Consecutive Sequence
// Given an array of elements, find a subsequence in the array such that all the elements in the sequence are consecutive irrespective of their order.

// Example
// Input: [100,4,200,1,3,2]

// Output: 4 // LCS [1, 2, 3, 4]

// Conceptually this is how it should work.
// Copy all the elements of the array in a set. Iterate the array and in each iteration determine if the current element will lead to new subsequence by checking if there is no element less than the current, present in the set. Then find how long this subsequence can be by incrementing the count till there is consecutive elements in the set. In the end return the longest consecutive sequence.

/**
 *
 * @param {number[]} inputArray Array of numbers
 */
 const longestConsecutiveSequence = (inputArray) => {
	// Your code here
    inputArray.sort((a,b) => (a-b));
    let s = new Set(inputArray);
    let a = Array.from(s);
    console.log(a);
    let c=1,m=0,p=0;
    for(let i=0;i<a.length-1;i++)
    {
        if(a[i+1] - a[i] === 1)
            c++;
        else
        {
            if(c>m) m=c;
            c=1;
        }
    }
	return (m===0?c:m);
}

console.log(longestConsecutiveSequence([100,4,200,1,3,2]));
console.log(longestConsecutiveSequence([0,3,7,2,5,8,4,6,0,1]));
