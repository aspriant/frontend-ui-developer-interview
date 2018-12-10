/**
 * Function that console logs numbers from 1 to n.
 * If the number is multiple(divisible) of three console log fizz
 * If the number is multiple of five(divisible) console log buzz
 * If the number is multiple(divisible) of both three and five log fizzbuzz
 */

function fizzBuzzLogger(number) {
  for (let index = 1; index <= number; index++) {
    /** Is the number is divisible by both three and five with 0 remainder */
    if (index % 3 === 0 && index % 5 === 0) {
      console.log('fizzbuzz')
      /** If the number is divisible by three with 0 remainder */
    } else if (index % 3 === 0) {
      console.log('fizz')
      /** If the number is divisible by five with 0 remainder */
    } else if (index % 5 == 0) {
      console.log('buzz')
    } else {
      console.log(index)
    }
  }
}