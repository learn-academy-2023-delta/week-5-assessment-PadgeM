// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe('encodeString', () => {
  it('takes in a string and returns a string with a coded message', () => {
    const secretCodeWord1 = "Lackadaisical"
    expect(encodeString(secretCodeWord1)).toBe("L4ck4d41s1c4l")

    const secretCodeWord2 = "Gobbledygook"
    expect(encodeString(secretCodeWord2)).toBe("G0bbl3dyg00k")

    const secretCodeWord3 = "Eccentric"
    expect(encodeString(secretCodeWord3)).toBe("3cc3ntr1c")
  })
})

// b) Create the function that makes the test pass.

const encodeString = (message) => {
  const encodingMap = {
    a: '4',
    e: '3',
    i: '1',
    o: '0'
  }

  let encodedMessage = ''

  for (let i = 0; i < message.length; i++) {
    const char = message[i].toLowerCase()

    if (encodingMap.hasOwnProperty(char)) {
      encodedMessage += encodingMap[char]
    } else {
      encodedMessage += message[i]
    }
  }

  return encodedMessage
}


// Pseudo code:
// I start by defining a function called encodeString that accepts a message as input.
// Inside the function, I create an object called encodingMap. This object contains a mapping of certain characters (specifically 'a', 'e', 'i', and 'o') to their encoded equivalents ('4', '3', '1', and '0' respectively).
// I initialize an empty string variable called encodedMessage. This variable will store the encoded version of the input message.
// I loop through each character in the input message. Starting from the first character and going up to the last character:
  // a. I convert the current character to lowercase and store it in a variable called char.
  // b. I check if the encodingMap object contains the current character (char). If it does, I append the corresponding encoded value from the encodingMap to the encodedMessage string.
  // c. If the current character is not in the encodingMap, I simply append the original character to the encodedMessage string.

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe('filterWordsByLetter', () => {
  const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
  
  it('returns an array of words containing the letter "a"', () => {
    const filterLetter = "a"
    const expectedOutput = ["Mango", "Apricot", "Peach"]
    const filteredWords = filterWordsByLetter(fruitArray, filterLetter)
    expect(filteredWords).toEqual(expectedOutput)
  })

  it('returns an array of words containing the letter "e"', () => {
    const filterLetter = "e"
    const expectedOutput = ["Cherry", "Blueberry", "Peach"]
    const filteredWords = filterWordsByLetter(fruitArray, filterLetter)
    expect(filteredWords).toEqual(expectedOutput)
  })
})

// b) Create the function that makes the test pass.

const filterWordsByLetter = (words, letter) => {
  return words.filter(word => word.toLowerCase().includes(letter.toLowerCase()))
}

// Psuedo code:
// Okay, so I have a function called filterWordsByLetter. It takes in two inputs: words and letter. words is an array of words, and letter is a specific letter that I want to filter by.
// Inside the function, I're using the filter method on the words array. This method helps us create a new array based on certain criteria.
// The filter method takes a callback function as an argument. In this case, the callback function is defined using arrow function syntax and has one parameter named word. This word represents each individual word in the words array.
// Now, within the callback function, I do a couple of things to each word before deciding whether to include it in the filtered array or not.
// First, I convert the word to lowercase using the toLowerCase method. This is done to make the comparison case-insensitive. I want to match the letter regardless of whether it's uppercase or lowercase.
// After converting the word to lowercase, I use the includes method on the word to check if it contains the letter. The includes method returns true if the letter is found in the word, and false otherwise.
// If the includes method returns true, it means the word includes the letter, so I include that word in the filtered array.
// The filter method continues this process for each word in the words array, building a new array that only contains the words meeting our criteria.
// Finally, the function returns the filtered array, which consists of the words from the original array that include the specific letter, regardless of their case.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// Pseudo code:

// a) Create a test with expect statements using the variable provided.

describe('isFullHouse', () => {
  it('should return true for a full house hand', () => {
    const hand1 = [5, 5, 5, 3, 3]
    const hand4 = [7, 2, 7, 2, 7]
    expect(isFullHouse(hand1)).toBe(true)
    expect(isFullHouse(hand4)).toBe(true)
  })

  it('should return false for a non-full house hand', () => {
    const hand2 = [5, 5, 3, 3, 4]
    const hand3 = [5, 5, 5, 5, 4]
    expect(isFullHouse(hand2)).toBe(false)
    expect(isFullHouse(hand3)).toBe(false)
  })
})


// b) Create the function that makes the test pass.

const isFullHouse = (hand) => {
  // Count the occurrences of each number in the hand
  const counts = {}
  for (let i = 0; i < hand.length; i++) {
    const num = hand[i]
    counts[num] = counts[num] ? counts[num] + 1 : 1
  }

  // Check if there is exactly one pair and one three of a kind
  let hasPair = false
  let hasThreeOfAKind = false
  for (const num in counts) {
    if (counts[num] === 2) {
      hasPair = true;
    } else if (counts[num] === 3) {
      hasThreeOfAKind = true
    }
  }

  return hasPair && hasThreeOfAKind
}


// Pseudo code:
// I need to declare a function called isFullHouse. The function uses arrow function syntax and takes one parameter named hand. This parameter represents an array of numbers that represents a hand of cards.
// Inside the function, I create an empty object called counts. This object will be used to count the occurrences of each number in the hand array.
// I then enter a for loop that iterates over each element in the hand array. The loop variable i represents the current index, and num represents the number at that index.
// Within the loop, I update the counts object. If counts[num] already exists, it means I have encountered the number before, so I increment its count by 1. If it doesn't exist yet, I initialize it with a count of 1.
// After the loop finishes, I have a counts object that contains the count of occurrences for each number in the hand array.
// Next, I declare two variables, hasPair and hasThreeOfAKind, and initialize them as false. These variables will help us keep track of whether I have found a pair and a three of a kind in the hand.
// I then enter another loop, this time using a for...in loop to iterate over the properties of the counts object. In each iteration, the loop variable num represents the current number.
// Within the loop, I check if the count of the current number (counts[num]) is equal to 2. If it is, it means I have found a pair, so I set the hasPair variable to true.
// If the count is not 2, I check if it is equal to 3. If it is, it means I have found a three of a kind, so I set the hasThreeOfAKind variable to true.
// After iterating through all the numbers in the counts object, I have determined if I have a pair and a three of a kind in the hand.
// Finally, I return the result of the logical expression hasPair && hasThreeOfAKind. This expression will be true if both hasPair and hasThreeOfAKind are true, indicating that I have a full house. Otherwise, it will be false.
