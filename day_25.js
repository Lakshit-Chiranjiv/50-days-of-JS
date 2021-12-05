// Stop gninnipS My sdroW!
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
    //TODO Have fun :)
    let r = "";
    let arr = string.split(" ");
    arr.forEach((e) => {
        if(e.length >=5)
          r = r + e.split('').reverse().join('');
        else
          r = r + e;
  
          r = r + " ";
    });
  
    r= r.slice(0,r.length-1)
    return r;
  }
  
  console.log(spinWords("Hey fellow warriors"));
  console.log(spinWords("You are almost to the last test"));
  console.log(spinWords("Seriously this is the last one"));
  console.log(spinWords("This is a test"));
  