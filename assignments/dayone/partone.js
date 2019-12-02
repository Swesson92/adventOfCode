const fileSync = require("fs");
const path = require("path");
const text = fileSync.readFileSync(path.join(__dirname) + "/dayone.txt", "utf8");
let output = text
  .split("\n")
  .map(y => calculateFuelPerModule(y))
  .reduce((acc, curr) => acc + curr, 0);
console.log(output);

function calculateFuelPerModule(mass) {
  //avrunda neråt till närmsta integer.
  return Math.floor(+mass / 3) - 2;
}
