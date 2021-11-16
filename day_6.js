// Write a function to truncate a string to a certain number of words
// Truncate a string to a certain number of words

const str1 = 'JavaScript is simple';
const wordLimit1 = 3;

const str2 = 'Codedamn is the best place to learn to code';
const wordLimit2 = 5;

function truncateWithWordLimit(str, wordLimit) {
    // write your solution here
    str = str + ' ';
    let wrd='',retstr = '';
    let c=0;
    for(let i = 0;i<str.length; i++)
    {
        if(str.charAt(i) === ' ')
        {
            c++;
            retstr += wrd;
            retstr += ' ';
            wrd = '';
        }
        else
            wrd += str.charAt(i);
        if(c === wordLimit)
            break;
    }
    retstr = retstr.slice(0,retstr.length-1);
    return retstr;
}

console.log(`Truncated string: ${truncateWithWordLimit(str1, wordLimit1)}`);
console.log(`Truncated string: ${truncateWithWordLimit(str2, wordLimit2)}`);
