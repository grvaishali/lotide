const eqArrays = function (arr1, arr2) {
  if (arr1 === arr2) {
    return true;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`);
  }
};

const letterPositions = function (sentence) {
  var results = {};
  var count = 0;

  for (var letter of sentence) {
    if (results[letter] === undefined) {
      results[letter] = [];
    }

    results[letter].push(count);
    count++;

  }
  return results;
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);