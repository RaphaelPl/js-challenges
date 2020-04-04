/*
Largest Number
Write a method that will take an array of numbers
and return whichever is the largest.

Test your solution:
mocha 02_largestNumber.js

Question: Why does the test pass for the third (last) test 
with no changes to the function?
*/
// due to the function returning null if the array is empty

function largestNumber(array) {
  let largest = 0;
  if (array.length < 1) {
    return null;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
  }
  return largest;
}

// function numericTest(array) {
//   var filterArray = []
//   if (array != null && array.length > 0) {
//     array.filter(array => array != NaN)
//     filterArray = array
//   }
//   return filterArray
// }

<<<<<<< HEAD
// function largestNumber(array)
=======
// let testarray = [1, 2, 3, 4];
numericTest(testarray);


>>>>>>> 02_largestNumber

var assert = require("assert");

describe("largestNumber", function() {
  it("should return the largest number", function() {
    assert.equal(10, largestNumber([5, -2, 10]));
  });
  it("should ignore invalid array entries", function() {
    assert.equal(10, largestNumber([10, 10, "s"]));
  });
  it("should return null if the array is empty", function() {
    assert.equal(null, largestNumber([]));
  });
});
