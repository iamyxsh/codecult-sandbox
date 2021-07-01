/**
 * The Sentence Statistics
 *
 * Let us write a function that receives a sentence like:
 * "The brown fox jumps over the small dog"
 *
 * The function should return statistics with the following:
 * - Number of words
 * - Number of characters (excluding spaces, commas, exclamation signs, question marks)
 * - Number of words which have at least one character in common with other words
 * - Number of words which reversed (case-insensitive) are the same: (Aba => abA)
 */

function getStats(sentence) {
  return {
    numberOfWords: 100,
    numberOfCharacters: 200,
    numberOfWordsWithCommonLetters: 4,
    numberOfPalindromWords: 2
  };
}

const stats = getStats("The brown fox jumps over the lazy dog.");
// numberOfWords: 8
// numberOfCharacters: 31
// numberOfWordsWithCommonLetters: 6 (jumps and lazy are the ones that don't match)
// numberOfPalindromWords: 0

console.clear();
console.log(stats);
