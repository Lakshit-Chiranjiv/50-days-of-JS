// Find the odd int
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples [7] should return 7, because it occurs 1 time (which is odd). [0] should return 0, because it occurs 1 time (which is odd). [1,1,2] should return 2, because it occurs 1 time (which is odd). [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd). [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(arr) {
    //happy coding!
//     let m = new Map();
//     // for(let i =0;i<arr.length;i++)
//     // {
//     //   if (!m.get(arr[i])) {
//     //       m.set(arr[i],1);
//     //   } else {
//     //       m.set(arr[i],(m.get(arr[i])+1));
//     //   }
//     // }
//     for(let i =0;i<arr.length;i++)
//     {
//       if (!m[arr[i]]) {
//           m[arr[i]] = 1;
//       } else {
//           m[arr[i]] += 1;
//       }
//     }
//     let ans=0;
  
//     console.log(m);
  
// m.forEach((val,key) =>{
//     if(val%2 !== 0)
//         return key;
// });


  
    // return ans;
    
    let xarr= [],t=0;
    if(arr.length===1)
        return arr[0];

    arr.sort();
    for(let i = 0;i<arr.length;i++)
        t = t^arr[i];


    return t;
  
  }

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));
console.log(findOdd([7]));
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]));

  