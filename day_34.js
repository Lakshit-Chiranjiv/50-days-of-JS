// Write a program to find the most frequent item of an array
// Input
// const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Output
// a 5

function mostFreq(arr) {
	// write your code here
    let freq=0,num;
    const map = {};
    arr.forEach(item => {
        if(map[item]){
            map[item]++;
        }else{
            map[item] = 1;
        }
    });
    for(const i in map)
    {
        if(map[i] > freq) 
        {
            freq = map[i];
            num = i;
        }
    }
    let s = num.toString() + ' '+ freq.toString();
	return s;
}

const arr = [1, 2, 2, 4, 5, 6, 6];

console.log(mostFreq(arr));