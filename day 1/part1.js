const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString()

// const input = `1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet`;

const splitLines = str => str.split(/\r?\n/);
let arr = splitLines(input)

function isNumber(value) {
  return !isNaN(+value);
}

function findNumbers(list) {
  let sum = 0
  list.forEach(function(word) {
    let first = null;
    let last = null
    let number = null;
    word.split('').forEach(function(letter) {
      if (isNumber(letter)){
        if(first == null)
          first = letter
        last = letter
      }
    })
    number = parseInt(`${first}${last}`)
    sum += number

  });
  console.log(`Sum is ${sum}`)

}

findNumbers(arr)