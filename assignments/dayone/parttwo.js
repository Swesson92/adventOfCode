const fileSync = require("fs");
const path = require("path");
const text = fileSync.readFileSync(path.join(__dirname) + "/dayone.txt", "utf8");
let output = text
  .split("\n")
  .map(d => calculateFuel(d))
  .reduce((acc, curr) => acc + curr, 0);
console.log(output);

function calculateFuel(mass) {
  let fuel = calculateFuelPerModule(mass);
  if (fuel > 0) {
    let fuelFuel = calculateFuel(fuel);
    if (fuelFuel > 0) {
      fuel += calculateFuel(fuel);
    }
  }
  return fuel;
}

function calculateFuelPerModule(mass) {
    //avrunda neråt till närmsta integer.
  return Math.floor(+mass / 3) - 2;
}