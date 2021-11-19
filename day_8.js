// Write a function which accepts two valid dates and returns the difference between them as number of days
// The difference between 2 dates in JavaScript will give the time difference in milliseconds
// Time difference can be converted in to days by dividing the 24Hrs time in milliseconds


const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    // write your solution here
    let dt1 = new Date(dateText1);
    let dt2 = new Date(dateText2);
    let mdt1 = dt1.getTime();
    let mdt2 = dt2.getTime();
    let diff = Math.abs(mdt1 - mdt2);
    diff = diff/DAY_IN_MILLISECONDS;
    // console.log(dt1.getTime(),dt2.getTime())
    // console.log("diff ",((dt2.getTime()-dt1.getTime())/DAY_IN_MILLISECONDS))
    return diff
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`);
console.log(`Days difference: ${getDaysBetweenDates('11/10/2021', '11/12/2021')}`);
console.log(`Days difference: ${getDaysBetweenDates('11/01/2020', '11/05/2020')}`);
