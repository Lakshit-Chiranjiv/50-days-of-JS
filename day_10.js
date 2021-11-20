// Write a function to remove array element based on object property?
// How to remove array element based on object property?

const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField1 = "money";
const filterField2 = "id";
const filterField3 = "cStatus";

function removeArrayElement(filterField) {
    // write your solution here
    const filtered_array = array.filter((obj)=>{
        if(obj.field !== filterField)
            return obj;
            // console.log(filtered_array); works
    });

    return JSON.stringify(filtered_array); //works
    // return filtered_array doesn't works -> returns [object Object]
}

console.log(`filtered array: ${removeArrayElement(filterField1)}`);
console.log(`filtered array: ${removeArrayElement(filterField2)}`);
console.log(`filtered array: ${removeArrayElement(filterField3)}`);
