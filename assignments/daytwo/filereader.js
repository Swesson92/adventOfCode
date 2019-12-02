exports.readFile = (separator = '\n') => {
    return require('fs').readFileSync('daytwo.txt', 'utf-8').split(separator).filter(Boolean).map(n => parseInt(n));
  }
  
  