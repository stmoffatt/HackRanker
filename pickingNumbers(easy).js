/* Description from HackerRank

Given an array of integers, find and print the maximum number of integers you can select from the array such that the absolute difference between any two of the chosen integers is less than or equal to 1. For example, if your array is a = [1,1,2,2,3,3,5,5,5], you can create two subarrays meeting the criterion: [1,1,2,2]  and [4,4,5,5,5]. The maximum length subarray has 5 elements.

Function Description

Complete the pickingNumbers function in the editor below. It should return an integer that represents the length of the longest array that can be created.

pickingNumbers has the following parameter(s):

a: an array of integers
Input Format

The first line contains a single integer n, the size of the array a. 
The second line contains n space-separated integers a[i].
 */

const pickingNumbers = a => {
  //sort array in ascending order
  a = a.sort(function(a, b) {
    return a - b
  })
  var total = 0
  var tempTotal = 0
  //loops through array
  for (var i = 0; i < a.length - 1; i++) {
    //resets tempTotal after loop [j] has finished
    tempTotal = 0
    //loops through array
    for (var j = i; j < a.length; j++) {
      //if first number minus second number is less than or equal to one increase tempTotal
      if (Math.abs(a[i] - a[j]) <= 1) {
        tempTotal++
      }
      //if tempTotal is greater than total update total with new number
      if (tempTotal > total) total = tempTotal
    }
  }
  return total
}
