// Mumbling
// Each char becomes n*chars where n is the index + 1, and the first char is capitalized divided by - instead of space.

// Only alphabets are passed as arguments for the accum(s) funciton

// Example: accum("ZpglnRxqenU") should return "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

function accum(s) {
    // your code goes below
    let retstr = '';
    for(let i=0;i<s.length;i++)
    {
        retstr += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + "-";
    }
    retstr = retstr.slice(0,retstr.length-1);
    return retstr;
  }
  
  console.log(accum('rjFh'));
  