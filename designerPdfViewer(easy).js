/* Description from HackerRank

When you select a contiguous block of text in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently.

In this challenge, you will be given a list of letter heights in the alphabet and a string. Using the letter heights given, determine the area of the rectangle highlight in mm2 assuming all letters are 1mm wide.

For example, the highlighted word=torn. Assume the heights of the letters are  t=2, 0=1, r=1 and n=1. The tallest letter is 2 high and there are 4 letters. The hightlighted area will be 2*4=8mm2 so the answer is 8.

Function Description

Complete the designerPdfViewer function in the editor below. It should return an integer representing the size of the highlighted area.

designerPdfViewer has the following parameter(s):

h: an array of integers representing the heights of each letter
word: a string
Input Format

The first line contains 26 space-separated integers describing the respective heights of each consecutive lowercase English letter, ascii[a-z]. 
The second line contains a single word, consisting of lowercase English alphabetic letters. */

function designerPdfViewer(h, word) {
  var answer = 0
  var max = 0
  word = word.split('')

  //searches through word array uses charCodeAt to find the numeric value of letter higher letter = higher numeric value. adds the highest number to max. max* length of word to find area.
  word.forEach(e => {
    if (max <= h[e.charCodeAt(0) - 97]) {
      max = h[e.charCodeAt(0) - 97]
    }
  })

  return (answer = max * word.length)
}
