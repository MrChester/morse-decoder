const expr1 = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
const expr2 = "0000101010000000101100101010110000000010**********00000011110000000010";
const expr3 = "00000000100000111010101010111100111011100000001011111110101011111010101010101010";
const expr4 = "00000011110000000010";

const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

const SPACE = "**********";

function decode(expr) {
  let tenNumbersSlicing = /(.{10}|.)/g,
    twoNumbersSlicing = /(.{2}|.)/g,
    tmpArr = [],
    morseMessage,
    morseMessageConverted = [];

  return expr.split(SPACE)
    // slice sequnce into 10 numbers
    .map(function (sequence) {
      return sequence
        // return array with elements of 10 numbers in every sequence
        .match(tenNumbersSlicing)
        // remove leading zeros in every ten number sequence
        .map(function (tenNumberSequence) {
          return tenNumberSequence.replace(/^0+/, '');
        });
    });

}

console.log(decode(expr1));
console.log(decode(expr2));
console.log(decode(expr3));
console.log(decode(expr4));

// module.exports = {
//   decode
// }