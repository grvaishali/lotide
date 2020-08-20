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

const middle = function (array) {
  let middleArray = [];
  let arrayLength = array.length;
  if (arrayLength > 2) {
    if (arrayLength % 2 == 0) {
      var index1 = Math.floor(arrayLength / 2);
      var index2 = index1 - 1;
      middleArray.push(array[index2]);
      middleArray.push(array[index1]);
    }
    else {
      middleArray.push(array[Math.floor(arrayLength / 2)]);
    }
  }
  console.log(middleArray);
  return middleArray;
}

assertArraysEqual(middle([2, 3, 4, 5]), ([3, 4]));
assertArraysEqual(middle([2, 3, 4, 5, 6]), ([4]));

