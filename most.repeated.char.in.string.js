/**
 * Return a character that is most commonly used in a given string
 * Aleeeeex => 'e' is the most repeated or most commonly used character
 */

function mostUsedCharacter(string) {
  const charactersMap = {}
  /** Value of the object key */
  let maxValue = 0
  /** Character key that has max value */
  let keyWithMaxValue = ''

  /**
   * for of loops is used with arrays and string alike. Here is used to loop over
   * given string and assigns each letter as a key of the characterMap object
   */
  for (let stringLetter of string) {
    /** Check if the letter already exists as a key on the object */
    if (!charactersMap[stringLetter]) {
      /** If not then assign the value of the key to 1 */
      charactersMap[stringLetter] = 1
    } else {
      /** Otherwise if it does exist already then increment the value of the object key by 1 */
      charactersMap[stringLetter]++
    }
  }

  console.log(charactersMap)

  /**
   * for in loop is used with object to loop over objects keys(properties).
   * character represents each KEY of the object (letter)
   */
  for (let character in charactersMap) {
    /**
     * Objects have KEY: VALUE pairs
     * With charactersMap[character] you access the VALUE of the key of an object
     * With charactersMap.character you can access the KEY of an object (this wasn't used here)
     */
    if (charactersMap[character] > maxValue) {
      maxValue = charactersMap[character]
      keyWithMaxValue = character
    }
  }
  /** Return the key that has the highest value */
  return keyWithMaxValue
}
