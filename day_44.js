// Count the divisors of a number
// Count the number of divisors of a positive integer n.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(num) {
    // code below
    let c = 0;
    for(let i=2;i<num;i++)
      c = (num%i===0) ? (c+1) : c;
  
    return c+2;
  }
  
  console.log(getDivisorsCnt(10));
  console.log(getDivisorsCnt(11));
  console.log(getDivisorsCnt(54));