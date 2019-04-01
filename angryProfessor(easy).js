/*Description from HackerRank 

A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, he decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time (ARRIVALTIME < 0) to arrived late (ARRIVALTIME > 0).

Given the arrival time of each student and a threshhold number of attendees, determine if the class is canceled.

Input Format

The first line of input contains t, the number of test cases.

Each test case consists of two lines.

The first line has two space-separated integers, n and k, the number of students (size of a) and the cancellation threshold. 
The second line contains n space-separated integers (a[1],a[2],...,an[n]) describing the arrival times for each student.

Note: Non-positive arrival times (a[i]<0) indicate the student arrived early or on time; positive arrival times (a[i]>0) indicate the student arrived a[i] minutes late.

For example, there are n=6  students who arrive at times a  = [-1,-1,0,0,1,1] . Four are there on time, and two arrive late. If there must be k=4 for class to go on, in this case the class will continue. If there must be k=5, then class is cancelled.

Function Description

Complete the angryProfessor function in the editor below. It must return YES if class is cancelled, or NO otherwise.

angryProfessor has the following parameter(s):

k: the threshold number of students
a: an array of integers representing arrival times
 */

function angryProfessor(k, a) {
  var ans = 'YES'
  var count = 0

  //loop through array, add to count if element is less than or equal to zero
  a.forEach(e => {
    if (e <= 0) {
      count++
    }
  })
  //if count is greater than or equal to k class is not canceled
  if (count >= k) {
    ans = 'NO'
  }

  return ans
}
