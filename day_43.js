// Highest Scoring Word
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
    //code your magic here
    x = x.split(' ');
    let mx = 0,mx_word,curr=0;
    x.forEach((wrd) => {
        wrd = wrd.split('');
        wrd.forEach((letter) => {
            curr = curr + letter.charCodeAt(0) - 96;
        });
        if(mx<curr)
        {
            mx = curr;
            mx_word = wrd.join('');
        }
        curr = 0;
    });
    
    return mx_word;
  }
  
  console.log(high('man helo'));