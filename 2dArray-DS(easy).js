/* Description from HackerRank 

Given a 6x6 2D Array, :

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
We define an hourglass in A to be a subset of values with indices falling in this pattern in arr's graphical representation:

a b c
  d
e f g
There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.

For example, given the 2D array:

-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
We calculate the following 16 hourglass values:

-63, -34, -9, 12, 
-10, 0, 28, 23, 
-27, -11, -2, 10, 
9, 17, 25, 18
Our highest hourglass value is 18 from the hourglass:

0 4 3
  1
8 6 6
Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

Function Description

Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.

hourglassSum has the following parameter(s):

arr: an array of integers
Input Format

Each of the 6 lines of inputs arr[i] contains 6 space-separated integers arr[i][j].


 */
function hourglassSum(arr) {
  // Given the constraint in the question (-9 <= arr[i][j] <= 9 and 0 <= i,j <= 5) -63 (-9*7) is the lowest possible number so set that as answer any sum larger will replace it
  var answer = -53
  var jj = 0
  //loops through first 4 arrays within arr
  for (var i = 0; i < 4; i++) {
    var sum = 0
    //loops through integers of single array three integers at a time
    for (var j = jj; j < 3 + jj; j++) {
      //adds numbers from the top and bottom of hourglass shape
      sum += arr[i][j]
      sum += arr[i + 2][j]
      // if j == jj add integer from one array up and 1 integer over, this number is the middle of the hourglass shape
      if (j == jj) {
        sum += arr[i + 1][jj + 1]
      }
    }
    //after looping through jj, jj either increase by 1 or is set back to zero. all hourglass possibilities have been met after 3
    jj = jj < 3 ? jj + 1 : 0
    //if sum is larger than answer replace answer with larger sum
    if (sum > answer) answer = sum

    if (jj != 0) i--
  }
  return answer
}
