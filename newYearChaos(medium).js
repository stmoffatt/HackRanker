/* Description from HackerRank 

It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by 1 from 1 at the front of the line to n at the back.

Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if n=8 and person 5 bribes person 4, the queue will look like this: 1,2,3,5,4,6,7,8 .

Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

Function Description

Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.

minimumBribes has the following parameter(s):

q: an array of integers
Input Format

The first line contains an integer t, the number of test cases.

Each of the next t pairs of lines are as follows: 
- The first line contains an integer t, the number of people in the queue 
- The second line has n space-separated integers describing the final state of the queue. */

function minimumBribes(q) {
  var ans = 0
  // loops through array from behind
  for (var i = q.length - 1; i >= 0; i--) {
    //if array integer - (index + 1) is larger than 2 that means the integer was swapped more than twice which indicated the array is too chaotic and loop should end
    if (q[i] - (i + 1) > 2) {
      ans = 'Too chaotic'
      i = 0
    }
    // since you can only bribe forward by two positions, loop starts at integer two ahead of q[i]. any numbers that are larger means there has been a swap adding one to the answer.
    for (var j = Math.max(0, q[i] - 2); j < i; j++) if (q[j] > q[i]) ans++
  }
  console.log(ans)
}
