// Union of Two Arrays
// Write the code for the function which returns the the union of the two given arrays

const unionOfArrays = (arr1, arr2) => {
    // code below here
    const arr = arr1.concat(arr2);
    const a = [...new Set(arr)]
    return a;
  };
  
  console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);
  