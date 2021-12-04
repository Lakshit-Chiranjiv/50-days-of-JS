// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form.

// For example:

// expandedForm(12); // Should return '10+2'
// expandedForm(42); // Should return '40+2'

function expandedForm(num) {
    // Your code here
    let n = num.toString();
    let rn = n.split('').reverse().join('');
    let r="";
    for(let i=n.length-1;i>=0;i--)
    {
        r = r + rn[i];
        if(rn[i]==='0')
        {
            r+='+';
            continue;
        }
        for(let j=0;j<i;j++)
          r = r + "0";
        if(i!==0)  
          r = r + "+";  
    }
  
    return r;
  }
  
  console.log(expandedForm(12));
  console.log(expandedForm(42));