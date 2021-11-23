// Given a number from 0 to 999,999,999,999, spell out that number in English.

// Step 1
// Handle the basic case of 0 through 99.

// If the input to the program is 22, then the output should be 'twenty-two'.

// Your program should complain loudly if given a number outside the blessed range.

// Some good test cases for this program are:

// 0
// 14
// 50
// 98
// -1
// 100
// Step 2
// Implement breaking a number up into chunks of thousands.

// So 1234567890 should yield a list like 1, 234, 567, and 890, while the far simpler 1000 should yield just 1 and 0.

// The program must also report any values that are out of range.

// Step 3
// Now handle inserting the appropriate scale word between those chunks.

// So 1234567890 should yield '1 billion 234 million 567 thousand 890'

// The program must also report any values that are out of range. It's fine to stop at "trillion".

// Step 4
// Put it all together to get nothing but plain English.

// 12345 should give twelve thousand three hundred forty-five.

// The program must also report any values that are out of range.


// const ones = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
// const tens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
// const hund = 'hundred';
// const thsnd = 'thousand';
// const mill = 'million';
// const bill = 'billion';
// const trill = 'trillion';

// let hund_part,th_part,mil_part,bil_part,rstn;

// function num_to_words_till_2(n){
//     if(n>=0)
//     {
//         sn = n.toString();
//         sn_len = sn.length;
//         if(n<20)
//             return ones[n];
//         else if(sn_len===2 && n>19)
//         {
//             let rst = tens[Number(sn[0])] +'-'+ (sn[1]==='0'?'':ones[Number(sn[1])]);
//             return rst;
//         }
//     }
// }

// function num_to_words_till_3(n){
//     if(n>=0)
//     {
//         sn = n.toString();
//         sn_len = sn.length;
//         if(sn_len<3)
//             return num_to_words_till_2(n);
//         if(sn_len===3)
//         {
//             let rst = (sn[0]==='0'?'':ones[Number(sn[0])]) + ' ' + hund + (((Number(sn.slice(1))!==0))?' ':'') + ((Number(sn.slice(1))<20 && Number(sn.slice(1))!==0)?ones[Number(sn.slice(1))]:tens[Number(sn[1])] +(((Number(sn.slice(1))!==0 && (Number(sn.slice(2)))!==0))?'-':'')+ (sn[2]==='0'?'':ones[Number(sn[2])]));
//             return rst;
//         }
//     }
// }

// function bignum_checks_for0(n){
//     if(n===0) return '';

//     return num_to_words_till_3(n);
// }

// function bignumwords_checks_for0(n,str){
//     if(n===0) return '';

//     return (' '+str);
// }

// function num_to_words(n){

//     if(n>=0 && n<1000000000000)
//     {
//         sn = n.toString();
//         sn_len = sn.length;

//         switch (sn_len) {
//             case 1:
//             case 2:
//             case 3:
//                 return num_to_words_till_3(n);

//             case 4:
//             case 5:
//             case 6:
//                 hund_part = sn.slice(-3);
//                 th_part = sn.slice(-6,-3);
//                 rstn = bignum_checks_for0(Number(th_part)) + bignumwords_checks_for0(Number(th_part),thsnd) + ' ' + bignum_checks_for0(Number(hund_part));
//                 return rstn;

//             case 7:
//             case 8:
//             case 9:
//                 hund_part = sn.slice(-3);
//                 th_part = sn.slice(-6,-3);
//                 mil_part = sn.slice(-9,-6);
//                 rstn = bignum_checks_for0(Number(mil_part)) + bignumwords_checks_for0(Number(mil_part),mill) + ' ' + bignum_checks_for0(Number(th_part)) + bignumwords_checks_for0(Number(th_part),thsnd) + ' ' + bignum_checks_for0(Number(hund_part));
//                 return rstn;

//             case 10:
//             case 11:
//             case 12:
//                 hund_part = sn.slice(-3);
//                 th_part = sn.slice(-6,-3);
//                 mil_part = sn.slice(-9,-6);
//                 bil_part = sn.slice(-12,-9);
//                 rstn = bignum_checks_for0(Number(bil_part)) + bignumwords_checks_for0(Number(bil_part),bill) + ' ' + bignum_checks_for0(Number(mil_part)) + bignumwords_checks_for0(Number(mil_part),mill) + ' ' + bignum_checks_for0(Number(th_part)) + bignumwords_checks_for0(Number(th_part),thsnd) + ' ' + bignum_checks_for0(Number(hund_part));
//                 return rstn;
        
//             default:
//                 break;
//         }
//     }
//     else
//         return "Out of Range";
// }


// console.log(num_to_words(56));



const ones = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const tens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
const hund = 'hundred';
const thsnd = 'thousand';
const mill = 'million';
const bill = 'billion';
const trill = 'trillion';

let hund_part,th_part,mil_part,bil_part,rstn;

function num_to_words_till_2(n){
    if(n>=0)
    {
        sn = n.toString();
        sn_len = sn.length;
        if(n<20)
            return ones[n];
        else if(sn_len===2 && n>19)
        {
            let rst = tens[Number(sn[0])] +'-'+ (sn[1]==='0'?'':ones[Number(sn[1])]);
            return rst;
        }
    }
}

function num_to_words_till_3(n){
    if(n>=0)
    {
        sn = n.toString();
        sn_len = sn.length;
        if(sn_len<3)
            return num_to_words_till_2(n);
        if(sn_len===3)
        {
            let rst = (sn[0]==='0'?'':ones[Number(sn[0])]) + ' ' + hund + (((Number(sn.slice(1))!==0))?' ':'') + ((Number(sn.slice(1))<20 && Number(sn.slice(1))!==0)?ones[Number(sn.slice(1))]:tens[Number(sn[1])] +(((Number(sn.slice(1))!==0 && (Number(sn.slice(2)))!==0))?'-':'')+ (sn[2]==='0'?'':ones[Number(sn[2])]));
            return rst;
        }
    }
}

function bignum_checks_for0(n){
    if(n===0) return '';

    return num_to_words_till_3(n);
}

function bignumwords_checks_for0(n,str){
    if(n===0) return '';

    return (' '+str);
}

const sayNumberInEnglish = (n /* ADD MORE PARAMETERS IF NEEDED */) => {
	// Write your solution here
    if(n>=0 && n<1000000000000)
    {
        sn = n.toString();
        sn_len = sn.length;

        switch (sn_len) {
            case 1:
            case 2:
            case 3:
                return num_to_words_till_3(n);

            case 4:
            case 5:
            case 6:
                hund_part = sn.slice(-3);
                th_part = sn.slice(-6,-3);
                rstn = bignum_checks_for0(Number(th_part)) + bignumwords_checks_for0(Number(th_part),thsnd) + ' ' + bignum_checks_for0(Number(hund_part));
                return rstn;

            case 7:
            case 8:
            case 9:
                hund_part = sn.slice(-3);
                th_part = sn.slice(-6,-3);
                mil_part = sn.slice(-9,-6);
                rstn = bignum_checks_for0(Number(mil_part)) + bignumwords_checks_for0(Number(mil_part),mill) + ' ' + bignum_checks_for0(Number(th_part)) + bignumwords_checks_for0(Number(th_part),thsnd) + ' ' + bignum_checks_for0(Number(hund_part));
                return rstn;

            case 10:
            case 11:
            case 12:
                hund_part = sn.slice(-3);
                th_part = sn.slice(-6,-3);
                mil_part = sn.slice(-9,-6);
                bil_part = sn.slice(-12,-9);
                rstn = bignum_checks_for0(Number(bil_part)) + bignumwords_checks_for0(Number(bil_part),bill) + ' ' + bignum_checks_for0(Number(mil_part)) + bignumwords_checks_for0(Number(mil_part),mill) + ' ' + bignum_checks_for0(Number(th_part)) + bignumwords_checks_for0(Number(th_part),thsnd) + ' ' + bignum_checks_for0(Number(hund_part));
                return rstn;
        
            default:
                break;
        }
    }
    else
        return "Out of Range";     
}

console.log(`5635 in english is: ${sayNumberInEnglish(5635)}`);
console.log(`2852203 in english is: ${sayNumberInEnglish(2852203)}`);
console.log(`5140454 in english is: ${sayNumberInEnglish(5140454)}`);
