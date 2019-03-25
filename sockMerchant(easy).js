/* Description from HackerRank

John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are n = 7  socks with colors ar = [1,2,1,2,1,3,2] . There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock
 */

function sockMerchant(n, ar) {
  var count = 0
  var colors = []
  //loop through array
  for (var i = 0; i < n; i++) {
    //if matching value is not in colors array add value to array
    if (!colors.includes(ar[i])) {
      colors.push(ar[i])
    } else {
      //if matching value is in colors array increase pairs count
      count++
      // find index of matching value in colors array
      let index = colors.indexOf(ar[i])
      //remove matching value from colors array
      colors.splice(index, 1)
    }
  }
  return count
}
