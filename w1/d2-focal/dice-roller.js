const times = process.argv[2];

function getRandomInt(max) {
  return (Math.floor(Math.random() * Math.floor(max))) + 1;
}

const roll = function (times) {
  let vals = [];
  for (let i = 0; i < times; i++) {
    vals.push(getRandomInt(6));
  }
  console.log(`Rolled ${times} dice: ${vals.join(', ')}`);
}

roll(times);