let numCallbackRuns = 0;
const findWaldo = function (names, found) {
  names.forEach((element) => {
    if (element === "Waldo") {
      found(numCallbackRuns)
    }
    numCallbackRuns++  // execute callback
  }
  );
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], function (index) {
  console.log("Waldo is located at:", index);
});;