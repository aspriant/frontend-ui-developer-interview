/**
 * 51 => 15
 * 214 => 412
 * 500 => 5
 * Zeros should be trimmed
 */

function reverseNumber(number) {
  /** toString() turns number into a string, split() turns string into array
   * reverse() reverses array and join() turns array into string
   */
  const reversedNumber = number
    .toString()
    .split('')
    .reverse()
    .join('')

  /** parseInt() turns string into number. Math.sign() returns 1 if number is positive and -1 if negative */
  return parseInt(reversedNumber) * Math.sign(number)
}
