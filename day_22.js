// Unique In Order
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// The argument can contain a string or an array

// For example: uniqueInOrder([1,2,2,3,3]) should return [1,2,3]

// uniqueInOrder('ABBCcAD') should return ['A', 'B', 'C', 'c', 'A', 'D']

let uniqueInOrder = (iterable) => {
  //your code here - remember iterable can be a string or an array
  let a;
  if(typeof(iterable) === 'string')
    a = iterable.split('');
  else
    a = iterable;

  let b=[],p;  
  for(let i =0;i<a.length;i++)
  {
      if(a[i] === a[i+1])
      {
          b.push(a[i]);
          p=i+1;
          while(a[p] === a[++i] && i<a.length){}
          i--;
      }
        
      else
      {
          b.push(a[i]);
      }
  }
  return b;
};

console.log(uniqueInOrder([3,3]));
console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1,2,2,3,3]));
console.log(uniqueInOrder([3,3,3,3,3,3,6]));