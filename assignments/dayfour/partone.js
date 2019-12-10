const start = 165432;
const end = 707912;

function isMonotone(pwd) {
  return pwd.split('').every((digit, index) => index === 0 || digit >= pwd[index - 1]);
}
function hasGroupOfTwo(pwd) { // For part 1
  return /(\d)\1/.test(pwd);
}
function hasGroupOfOnlyTwo(pwd) { // For part 2
  return (pwd.match(/(\d)\1+/g) || []).map(sequence => sequence.length).includes(2);
}
function isCandidate(pwd) {
  return hasGroupOfTwo(pwd) && isMonotone(pwd);
}

let validCount = 0;
for (let pwd = start; pwd <= end; pwd++) {
  validCount += isCandidate(String(pwd));
}

console.log(validCount);