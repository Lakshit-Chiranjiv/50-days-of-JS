// Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
// Note : An empty string is also an isogram

function isIsogram(str) {
    // your code here
      if(str === "") return true;
      str = str.toLowerCase().split('');
      let set_str = new Set(str);
      set_str = [...set_str];
      return str.length === set_str.length; 
  }
  
  console.log(isIsogram("isogram"));
  console.log(isIsogram("moOse"));