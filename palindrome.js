/** ===============================1st Solution======================================== */

/**
 * Palindrome is a string that looks exactly the same when reversed
 * Example: LEVEL when reversed is also LEVEL
 * This function return true or false
 */

function palindrome(string) {
  /**
   * Convert the string into an array with split() then reverse it with built-in method
   * and then turn it back into a string with join() and assign that to reversed const
   */
  const reversed = string
    .split('')
    .reverse()
    .join('')

  /** Return boolean value by comparing the reversed and the original strings */
  return string === reversed
}

/** ===============================2nd Solution======================================== */

/**
 * Using Array.prototype.every()
 * Every runs only on arrays and returns boolean value if every element in a array satisfies
 * certain condition that you give it
 */

function palindrome(string) {

  /**
   * Again you have to convert string into an array to be able to use every()
   * character parameter represents each character of the string during iteration. index represents
   * an array index of an array element and starts counting from 0
   * To get the boolean value true or false whether its palindrome or not you have to compare
   * the string's current character in every given iteration to its
   * mirror character on the other side of the string so to say if they are the same
   * This mirror character you would get by getting the strings length and subtracting the current
   * index and then -1 because length starts counting from 1 and array index from 0
   * This -1 thing has nothing to do with palindrome its just JavaScript thing that .length starts
   * counting from 1 and index of an element of an array starts from 0 and to use them together
   * you have to do this -1 thing so it brings them to the same level so to say, otherwise
   * length will always be higher by 1
   */
  return string.split('').every((character, index) => {
    return character === string[string.length - index -1]
  })
}
