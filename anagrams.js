/**
 * A string is an anagram of another string if it shares the same and the same amount
 * of characters(letters)
 * Spaces and punctuation are not counting. Only letters and case insensitive
 */

function anagramChecker(stringA, stringB) {
  const aMap = characterMapBuilder(stringA)
  const bMap = characterMapBuilder(stringB)

  /**
   * Object.keys returns an array that holds only the keys of the object passed
   * When .length added it returns a number of the keys length (as opposed to array)
   */
  if (Object.keys(aMap).length !== Object.keys(bMap).length) {
    return false
  }

  /** Compare each key value of one string map to another */
  for (let character in aMap) {
    if (aMap[character] !== aMap[character]) {
      return false
    }
  }

  return true
}

/**
 * Similar function was used in most.repeated.char.in.string.js solution where you
 * first build an object with  the string's characters as keys and its pair values
 * as counters of the character.
 */
function characterMapBuilder(string) {
  const characterMap = {}

  /**
   * Loop over a string and each character(letter) add as a key to the empty object
   * RegExp strips away everything that is not a letter like !!?? and white spaces
   */
  for (let character of string.replace(/[^\w]/g, '').toLowerCase()) {
    /**
     * Add each letter as a key to the obj and initiate as 1 if non-existing key
     * otherwise add 1 as a value of the key
     */
    characterMap[character] = characterMap[character] + 1 || 1
  }

  return characterMap
}
