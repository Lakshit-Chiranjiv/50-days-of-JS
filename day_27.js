// Vowel Count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels

// The input can consit of Lower case and upper case letters so make sure to count both of them.

function getCount(str) {
    let vowelsCount = 0;
    str = str.toLowerCase();
    // enter your magic here
    let arr = str.split('');
    arr.forEach((a) => {
        if(a==='a' || a==='e' || a==='i' || a==='o' || a==='u')
          vowelsCount++;
    })
    return vowelsCount;
  }
  
  console.log(getCount("abracadabra"));
  console.log(getCount("THe Strings are SOO COOL"));
  console.log(getCount("There exists only 5 vowels"));