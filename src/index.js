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

//Splitting the string. Giving punctuations like ",", ":", etc. as separators in a regex form.
const getWordArray = (string) => {
	let arr = string.split(/(?:,| |\?|:|'|"|!|\.|;)+/)

	//Coverting the whole array to lowercase to avoid any case-sensitive comparisons
	arr = arr.map((word) => word.toLowerCase())

	//If the string ends with a punctuation mentioned in regex, it will give an empty string
	//at the last position. This check is to avoid that extra count.
	if (arr.slice(-1)[0] === "") {
		arr.pop()
		return arr
	}

	return arr
}

const getNumOfWords = (arr) => arr.length

const getNumOfCharacters = (string) => {
	//Creating a new arr that excludes commas, white spaces, question marks and exclamation signs.
	let arr = string.split(/(?:,| |\?|!)+/)

	//Creating a temp variable to join all the elements in the array.
	//This will form one long string.
	const temp = arr.join("")

	//Splitting the One Long String made above and then taking the number of elements.
	return temp.split("").length
}

const getNumOfWordsWithCommonLetters = (arr) => {
	var numOfWordsWithNoCommonLetters = 0

	for (const [index, word] of arr.entries()) {
		//Top level loop - each word from the arr

		//Flag to check if there are two common words
		let flag = false

		for (const char of word.split("")) {
			//Second loop - each char of the above word

			//Creating a temp array to store words other that the current word
			let tempArr = [...arr]
			tempArr.splice(index, 1)

			for (const nextWord of tempArr) {
				//Third loop - each word other than the current word

				//Checking if the char is present in the words other than the current word
				if (nextWord.includes(char)) {
					flag = true

					//Breaking - no need to check with further words
					break
				}
			}

			//Breaking - no need to check further characters
			if (flag) break
		}

		//If the flag still remains false, it has no common characters with other words
		if (!flag) numOfWordsWithNoCommonLetters++
	}

	//Returning the words which are common.
	return arr.length - numOfWordsWithNoCommonLetters
}

const getNumOfPalindromeWords = (arr) => {
	let numOfPalindromWords = 0

	for (const word of arr) {
		//Creating a temp word. First, split the words in each characters. Then I reversed
		//the array, then I joined the array. This will create a reversed Word
		const reversedWord = word.split("").reverse().join("")

		//Checking if Two words are same or not.
		if (word === reversedWord) numOfPalindromWords++
	}

	return numOfPalindromWords
}

function getStats(sentence) {
	const arr = getWordArray(sentence)

	return {
		numberOfWords: getNumOfWords(arr),
		numberOfCharacters: getNumOfCharacters(sentence),
		numberOfWordsWithCommonLetters: getNumOfWordsWithCommonLetters(arr),
		numberOfPalindromWords: getNumOfPalindromeWords(arr),
	}
}

const stats = getStats("The brown, ? fox jumps over the lazy dog.")
// numberOfWords: 8
// numberOfCharacters: 31
// numberOfWordsWithCommonLetters: 6 (jumps and lazy are the ones that don't match)
// numberOfPalindromWords: 0

// console.clear()
console.log(stats)
