/** ================================== 1nd Solution ===================================== */

/**
 * Using Array.prototype.reverse()
 * This method can be used only on arrays hence you always have to convert a string into an array
 * Also, many think this is cheating because reverse() is built-in method
 * reverseString('Alex') becomes xelA
 */

function reverseString(string) {
  /** split() takes every single character from a string and turns it into an array element */
  const convertedIntoArray = string.split('')

  /** reverse() flips array elements */
  convertedIntoArray.reverse()

  /** join() method joins all elements of an array into a string, basically the opposite of split() */
  /** Make sure you always return the last statement */
  return convertedIntoArray.join('')
}

/** This is the exact same thing as a one liner, but prettier... */
function reverseStringOneLiner(string) {
  return string
    .split('')
    .reverse()
    .join('')
}

/** ================================== 2nd Solution ===================================== */

/** Using for of loop (never use old bug-prone for loop) */

function reverseString(string) {
  /** This will hold the reversed string */
  let reversed = ''

  /**
   * For of loop will loop through each character of a string (you dont need to convert into an array)
   * and assign it to eachCharacterOfString. Then it will concatenate it to reversed and assign it to
   * reversed so it holds each new looped character and forms a reversed string (word)
   */
  for (let eachCharacterOfString of string) {
    reversed = eachCharacterOfString + reversed
  }

  /** Dont forget to return */
  return reversed
}

/** ================================== 3nd Solution ===================================== */

/** Using reduce() method */

function reverseString(string) {
  /** You again have to convert the string to an array because reduce works only on arrays
   * reversed holds each new looped character and forms a reversed string (word) and is initiated as ''
   * passed as a second parameter to reduce apart from the arrow function.
   * eachCharacterOfString holds one single character during each iteration of reduce() method
   * Dont forget to return both string and reduce() method's value
   */
  return string.split('').reduce((reversed, eachCharacterOfString) => {
    return eachCharacterOfString + reversed
  }, '')
}

/** This is the exact same thing as a one liner, but prettier... */
function reverseString(string) {
  return string
    .split('')
    .reduce(
      (reversed, eachCharacterOfString) => eachCharacterOfString + reversed,
      '',
    )
}
