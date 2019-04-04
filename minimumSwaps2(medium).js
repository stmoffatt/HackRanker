/* Description from HackerRank 

You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.

For example, given the array arr = [7,1,3,2,4,5,6] we perform the following steps:

i   arr                         swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]
It took 5 swaps to sort the array.

Function Description

Complete the function minimumSwaps in the editor below. It must return an integer representing the minimum number of swaps to sort the array.

minimumSwaps has the following parameter(s):

arr: an unordered array of integers
Input Format

The first line contains an integer, n, the size of arr. 
The second line contains n space-separated integers arr[i]. */

function minimumSwaps(arr) {
  var front = 0
  var back = arr.length - 1
  var answer = 0

  while (front < back) {
    // this skips to next number integer is in correct position
    while (arr[front] == front + 1 && front < back) front++
    if (front < back) {
      //restructures array to put integer in correct place
      //temp finds the index of where the integer should be placed
      var temp = arr[arr[front] - 1]
      // swap integers from temp index with original front index
      arr[arr[front] - 1] = arr[front]
      arr[front] = temp
      //add one swap
      answer++
    }
  }
  return answer
}
