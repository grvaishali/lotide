
const diceRoller = function (numberOfTimes) {
  let diceNumbers = []
  for (let i = 0; i < numberOfTimes; i++) {
    let diceNumber = getRndomNumber(numberOfTimes);
    diceNumbers.push(diceNumber);
  }
  console.log(`Rolled ${numberOfTimes} dice: ${diceNumbers.join(', ')}`);
}

const getRndomNumber = function (max) {
  return Math.floor((Math.random() * Math.floor(max)) + 1);
}
let times = process.argv[2];
diceRoller(times)p'o24eoIDP;