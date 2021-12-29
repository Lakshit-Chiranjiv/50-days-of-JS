// Is this a triangle?
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Hint You can check whether the sum of the two sides of a triangle is greater than the third side in all possible combinations.

function isTriangle(a, b, c) {
    // your code here
  
    return ((a>0 && b>0 && c>0) && (((a+b)>c) && ((b+c)>a) && ((a+c)>b)));
  
  }
  
  console.log(isTriangle(1,2,2));
  console.log(isTriangle(7,2,2));
  console.log(isTriangle(7,14,16));