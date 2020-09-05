// caesar.js

const encrypt = function(str, shiftChars) {

  // Split str into a character array

  return (

    str

      .split("")

      .map.call(str, function(char) {

        let x = char.charCodeAt(0);

        if (x === 32) {

          return String.fromCharCode(x);

        }

        let charValue = x + shiftChars;

        if (charValue > 122) {

          charValue -= 26;

        }

        if (charValue < 97) {

          charValue += 26;

        }


        return String.fromCharCode(charValue);

      })

      .join("")

  );

};

module.exports = { encrypt };