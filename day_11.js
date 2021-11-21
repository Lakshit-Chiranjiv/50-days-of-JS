// Return the N-th value of the Fibonacci sequence
// Return the N-th value of the Fibonacci sequence

function fibonacci(n) {
	// write your solution here
    if(n===0) return 0;
    if(n===1) return 1;
    let a = 0,b=1,c;
    for(let i=1;i<=(n-1);i++)
    {
        c=a+b;
        a=b;
        b=c;
    }
	return c;
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`);

