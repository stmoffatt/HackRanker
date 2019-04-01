/* Description from HackerRank

Alice is playing an arcade game and wants to climb to the top of the leaderboard and wants to track her ranking. The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number 1 on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
For example, the four players on the leaderboard have high scores of 100, 90, 90, and 80. Those players will have ranks 1, 2, 2, and 3, respectively. If Alice's scores are 70,80  and 105, her rankings after each game are 4th, 3rd  and 1st.

Function Description

Complete the climbingLeaderboard function in the editor below. It should return an integer array where each element represents Alice's rank after the jth game.

climbingLeaderboard has the following parameter(s):

scores: an array of integers that represent leaderboard scores
alice: an array of integers that represent Alice's scores
Input Format

The first line contains an integer n, the number of players on the leaderboard. 
The next line contains n space-separated integers scores[i], the leaderboard scores in decreasing order. 
The next line contains an integer, m, denoting the number games Alice plays. 
The last line contains m space-separated integers alice[j], the game scores. */

function climbingLeaderboard(scores, alice) {
  // creates new array of scores with duplicate elements removed
  var newScores = [...new Set(scores)]
  var results = []

  var i = newScores.length - 1

  alice.forEach(e => {
    //newScores is in descending order, while alice is in ascending order so sort through newscores from back and alice from front so that the numbers are in proper order
    while (i >= 0) {
      //if alices number is bigger than newScores iterate to the next number on newScores until alices score is less than newScores as that will be the spot for alice on the leaderboard
      if (e >= newScores[i]) i--
      else {
        //add i + 2 to indicate alices placment on leaderboard. add 2 to make up for -1 in i and index starting at 0.
        results.push(i + 2)
        break
      }
    }
    //if index < 0 this indicates that allison number is in first on the leaderboard
    if (i < 0) results.push(1)
  })

  return results
}
