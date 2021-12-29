// Human readable duration format
// Your task is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this challenge, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration(seconds) {
    // your code here
    let str = '';
    if(seconds === 0) str = "now";
    else if(seconds>0 && seconds<60)
    {
        let s = seconds;
        str = `${s} second${(s>1)?'s':''}`;
    }
    else if(seconds>60 && seconds<(60*60))
    {
        let s = seconds%60;
        let m = Math.floor(seconds/60);
        if(m>0)
            str = str + `${m} minute${(m>1)?'s':''}`;
        if(s>0)
            str = str + ` and ${s} second${(s>1)?'s':''}`;
    }
    else if(seconds>(60*60) && seconds<(60*60*24))
    {
        let h = Math.floor(seconds/(60*60));
        let m = Math.floor((seconds - (h*(60*60)))/60);
        let s = (seconds - (h*(60*60)) - (m*60))%60;
        if(h>0)
            str = str + `${h} hour${(h>1)?'s':''}`;
        if(m>0)
            str = str + `, ${m} minute${(m>1)?'s':''}`;
        if(s>0)
            str = str + ` and ${s} second${(s>1)?'s':''}`;
    }
    else if(seconds>(60*60*24) && seconds<(60*60*24*365))
    {
        let d = Math.floor(seconds/(60*60*24));
        let h = Math.floor((seconds - (d*(60*60*24)))/(60*60));
        let m = Math.floor((seconds - (d*(60*60*24)) - (h*(60*60)))/60);
        let s = (seconds - (d*(60*60*24)) - (h*(60*60)) - (m*60))%60;
        if(d>0)
            str = str + `${d} day${(d>1)?'s':''}`;
        if(h>0)
            str = str + `, ${h} hour${(h>1)?'s':''}`;
        if(m>0)
            str = str + `, ${m} minute${(m>1)?'s':''}`;
        if(s>0)
            str = str + ` and ${s} second${(s>1)?'s':''}`;
    }
    else
    {
        let y = Math.floor(seconds/(60*60*24*365));
        let d = Math.floor((seconds - (y*(60*60*24*365)))/(60*60*24));
        let h = Math.floor((seconds - (y*(60*60*24*365)) - (d*(60*60*24)))/(60*60));
        let m = Math.floor((seconds - (y*(60*60*24*365)) - (d*(60*60*24)) - (h*(60*60)))/60);
        let s = (seconds - (y*(60*60*24*365)) -(d*(60*60*24)) - (h*(60*60)) - (m*60))%60;
        if(y>0)
            str = str + `${y} year${(y>1)?'s':''}`;
        if(d>0)
            str = str + `, ${d} day${(d>1)?'s':''}`;
        if(h>0)
            str = str + `, ${h} hour${(h>1)?'s':''}`;
        if(m>0)
            str = str + `, ${m} minute${(m>1)?'s':''}`;
        if(s>0)
            str = str + ` and ${s} second${(s>1)?'s':''}`;
    }
    return str;
  }
  
  console.log(formatDuration(1));
  console.log(formatDuration(3662));
  console.log(formatDuration(90001));