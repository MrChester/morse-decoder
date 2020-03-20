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

  expr.split(SPACE)
    // slice sequnce into 10 numbers
    .map(function (sequence) {
      sequence
        // return array with elements of 10 numbers in every sequence
        .match(tenNumbersSlicing)
        // remove leading zeros in every ten number sequence
        .map(function (tenNumberSequence) {
          tenNumberSequence.replace(/^0+/, '')
          // slice ten number sequence into two number sequence
          .match(twoNumbersSlicing)
          .map(function(twoNumberSequence){
            // add to temp arr two number sequence
            tmpArr.push(twoNumberSequence);
          });
          // add space between letters
          tmpArr.push(" ");
        });
        // add space between words
        tmpArr.push("   ");
    });

    // convert temparr element into morse sequnce
    morseMessage = tmpArr.reduce(function(acc, item){
      if (item === "10") {
        return acc + ".";
      } else if (item === "11") {
        return acc + "-";
      } else if (item === " ") {
        return acc + " ";
      } else {
        return acc + "    ";
      }
    }, "");

    //convert morse sequence into words
    morseMessage.split("   ").map(function (word) {
      word.split(" ").map(function (letter) {
        morseMessageConverted.push(MORSE_TABLE[letter]);
      });
      morseMessageConverted.push(" ");
    });

    return morseMessageConverted.join("").trim();

}

module.exports = {
  decode
}