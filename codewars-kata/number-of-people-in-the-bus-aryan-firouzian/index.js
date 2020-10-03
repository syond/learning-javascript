// Kata link -> https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

const number = function (busStops) {
  let getInTheBus = 0;
  let getOffTheBus = 0;

  for (x = 0; x < busStops.length; x++) {
    getInTheBus += busStops[x][0];
    getOffTheBus += busStops[x][1];
  }

  const stillInTheBus = getInTheBus - getOffTheBus;

  return stillInTheBus;
};

// Test exemple: 
// console.log(number([[10,0],[3,5],[5,8]]))
// output must be: 5