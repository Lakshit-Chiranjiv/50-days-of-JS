// Write a function which can convert the time input given in 12 hours format to 24 hours format
// The check for 'AM' and 'PM' can be verified using endsWith String method
// An extra 0 would be needed if the hours have single digit

const time1 = '12:10AM';
const time2 = '5:00AM';
const time3 = '12:33PM';
const time4 = '01:59PM';
const time5 = '11:8PM';
const time6 = '10:02PM';

function convertTo24HrsFormat(time) {
    // write your solution here
    if(time.length === 6)
    {
        if(time.charAt(2) == ':')
            time = time.slice(0,3) + '0' + time.slice(3);
        else
            time = '0' + time;
    }
    
    let ret_time;
    // console.log(time.slice(-2));
    if(time.slice(-2) === 'AM')
    {
        if(time.slice(0,2) === '12')
            ret_time = '00'+time.slice(2,5);
        else
            ret_time = time.slice(0,5);
    }
    else
    {
        if(time.slice(0,2) === '12')
            ret_time = time.slice(0,5);
        else
        {
            let hr = (Number(time.slice(0,2)) + 12).toString();
            ret_time = hr + time.slice(2,5);
        }
    }


    // console.log(ret_time);
    return ret_time;
}
console.log(`Converted time: ${convertTo24HrsFormat(time1)}`);
console.log(`Converted time: ${convertTo24HrsFormat(time2)}`);
console.log(`Converted time: ${convertTo24HrsFormat(time3)}`);
console.log(`Converted time: ${convertTo24HrsFormat(time4)}`);
console.log(`Converted time: ${convertTo24HrsFormat(time5)}`);
console.log(`Converted time: ${convertTo24HrsFormat(time6)}`);