/* Description from HackerRank

We define a magic square to be an n x n matrix of distinct positive integers from 1 to n² where the sum of any row, column, or diagonal of length n is always equal to the same number: the magic constant.

You will be given a 3 x 3 matrix s of integers in the inclusive range [1,9] . We can convert any digit a to any other digit b in the range [1,9]  at cost of |a-b|. Given s, convert it into a magic square at minimal cost. Print this cost on a new line.

Note: The resulting magic square must contain distinct integers in the inclusive range [1,9].

For example, we start with the following matrix s:

5 3 4
1 5 8
6 4 2
We can convert it to the following magic square:

8 3 4
1 5 9
6 7 2
This took three replacements at a cost of |5-8|+|8-9|+|4-7|=7.

Function Description

Complete the formingMagicSquare function in the editor below. It should return an integer that represents the minimal total cost of converting the input square to a magic square.

formingMagicSquare has the following parameter(s):

s: a 3 x 3 array of integers
Input Format

Each of the lines contains three space-separated integers of row s[i]. */

//compares all possible magic square combinations with provided array [s] and finds lowest difference
const formingMagicSquare = s => {
  //all possible magicSquare combinations
  const magicSquares = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
  ]
  const solution = s => {
    const totals = []
    //loop through magic squares array
    for (let magicSquare of magicSquares) {
      let total = 0
      //loop through indivduial squares
      for (let i = 0; i < magicSquare.length; i++) {
        const magicRow = magicSquare[i]
        const sRow = s[i]
        //loop through individual arrays of square
        for (let j = 0; j < magicRow.length; j++) {
          const magicValue = magicRow[j]
          const sValue = sRow[j]
          //if the individual value from magicSquare is not equal to provided array's individual value then find the diffrence and add it to total
          if (magicValue !== sValue) {
            total += Math.max(magicValue, sValue) - Math.min(magicValue, sValue)
          }
        }
      }
      //push total once it has looped through one individual square from magicSquares
      totals.push(total)
    }
    //find the lowest number from total
    return Math.min(...totals)
  }

  return solution(s)
}
