function isEvenlyDivisible(num1, num2) {
  return num1 % num2 === 0;
}

function halfSquare(num) {
  return num * num / 2;
}

function exclaim(str) {
  if (str[str.length - 1] === '!') {
    return exclaim(str.substr(0, str.length - 1))
  } else return `${str}!`
}

function isLong(str) {
  return str.length >= 15
}

function containsDigit(str) {
  str = [...str]
  return str.some(c => !isNaN(+c) && c !== ' ')
}

// function containsDigit(str) {
//   str = [...str]
//   for (let i of str){
//     if (!isNaN(+i) && i !== ' ') return true
//   }
//   return false
// }

function containsLowerCase(str) {
  str = [...str]
  return str.some(c => c === c.toLowerCase() && c.toUpperCase() !== c.toLowerCase())
}

function containsUpperCase(str) {
  str = [...str]
  return str.some(c => c === c.toUpperCase() && c.toUpperCase() !== c.toLowerCase())
}

function containsNonAlphanumeric(str) {
  str = [...str]
  return str.some(c => c.toUpperCase() === c.toLowerCase() && isNaN(+c) || c === ' ')
}

function containsSpace(str) {
  str = [...str]
  return str.some(c => c === ' ')
}

function countWords(str) {
  str = str.split(' ')
  return str.length
}

function digits(num) {
  num = Array.from(num.toString(), Number)
  return num.filter(n => !isNaN(n))
}

function truncate(str) {
  if (str.length >= 15) {
    return `${str.substr(0, 8)}...`
  } else return str
}

function isValidPassword(str) {
  return containsLowerCase(str) && containsUpperCase(str) && containsDigit(str) && containsNonAlphanumeric(str) && !containsSpace(str)
}

function onlyPunchy(titles) {
  return titles
    .map(title => exclaim(title))
    .filter(title => title.length < 15)
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}