/**
 * Capitalize the first letter of each word
 * subscribe to pewdiepie => Subscribe To Pewdiepie
 */

function capitalize(string) {
  /** Initiate an array that will hold the passed string */
  const wordsAsArray = []

  /**
   * split() is called on the string with an empty space as a para which means it
   * each separate word of the string will be one element of the array
   */
  for (const word of string.split(' ')) {
    /**
     * word[0] gets the first letter of each element of the array, toUpperCase() turns it
     * to guess what and slice() slices the rest of the chars of each element and
     * appends(push()) to each first letter of the element (word)
     */
    wordsAsArray.push(word[0].toUpperCase() + word.slice(1))
  }
  /** Converts the array back into a string with ' ' as separator between each element */
  return wordsAsArray.join(' ')
}