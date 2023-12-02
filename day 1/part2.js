const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString()

const numberWords = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7, 
  eight: 8,
  nine: 9,
}

// const input = `two1nine
// eightwothree
// abcone2threexyz
// xtwone3four
// 4nineeightseven2
// zoneight234
// 7pqrstsixteen`;

const splitLines = str => str.split(/\r?\n/);
const arr = splitLines(input)

function isNumber(value) {
  return !isNaN(+value);
}

function numberFromWord(word, index) {  
  const keys = Object.keys(numberWords)
  let result = null

  function getSubstring(numberWord) {
    return word.substring(index, index + numberWord.length)
  }

  for (let numberWord of keys) {
    let substring = getSubstring(numberWord);
    if (substring == numberWord) {
      result = numberWords[numberWord];
      break;
    }
  }

  return result;
}  



function findNumbers(list) {
  let sum = 0
  list.forEach(function(word) {
    let first = null;
    let last = null
    let number = null;
    word.split('').forEach(function(letter, index) {
      let number = numberFromWord(word, index)
      if (isNumber(letter)) {
        if(first == null)
          first = letter
        last = letter
      } else if(number !== null){
        if(first == null)
          first = number
        last = number
      }
      
    })
    combinedNumber = parseInt(`${first}${last}`)
    sum += combinedNumber

  });

  return sum;
}

console.log(`Sum is ${findNumbers(arr)}`)