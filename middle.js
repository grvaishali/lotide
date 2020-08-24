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
  return middleArray;
}

module.exports = middle;


