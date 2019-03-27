/* Description from HackerRank

The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. How tall will her tree be after n growth cycles?

For example, if the number of growth cycles is n=5, the calculations are as follows:

Period  Height
0          1
1          2
2          3
3          6
4          7
5          14
Function Description

Complete the utopianTree function in the editor below. It should return the integer height of the tree after the input number of growth cycles.

utopianTree has the following parameter(s):

n: an integer, the number of growth cycles to simulate
Input Format

The first line contains an integer, t, the number of test cases. 
 subsequent lines each contain an integer,n , denoting the number of cycles for that test case. */

function utopianTree(n) {
  var c = 0
  var ans = 0
  while (n >= c) {
    if (c % 2 == 0) {
      ans++
    } else {
      ans = ans * 2
    }
    c++
  }
  return ans
}
