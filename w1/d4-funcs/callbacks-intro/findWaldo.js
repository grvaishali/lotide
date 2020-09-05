let numCallbackRuns = 0;
const findWaldo = function (names, found) {
  names.forEach((element) => {
    if (element === "Waldo") {
      found(element, numCallbackRuns)
    }
    numCallbackRuns++  // execute callback
  }
  );
}

const actionWhenFound = function (name, index) {
  console.log(`Found ${name} at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);