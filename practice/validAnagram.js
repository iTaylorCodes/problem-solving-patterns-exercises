// My Implementation - O(n)
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const str1FreqCounter = {};
  const str2FreqCounter = {};

  for (let char of str1) {
    if (str1FreqCounter[char]) {
      str1FreqCounter[char] += 1;
    } else {
      str1FreqCounter[char] = 1;
    }
  }
  for (let char of str2) {
    if (str2FreqCounter[char]) {
      str2FreqCounter[char] += 1;
    } else {
      str2FreqCounter[char] = 1;
    }
  }

  for (let key in str1FreqCounter) {
    if (str1FreqCounter[key] !== str2FreqCounter[key]) {
      return false;
    }
  }
  return true;
}

// BAD, Using .sort() is O(n log n) causing this to be a slow implementation
function quadraticValidAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort("").join("");
}

// Colt's Implementation
// O(n)
function makeFreqCounter(str) {
  const frequencies = new Map();
  for (let val of str) {
    let valCount = frequencies.get(val) || 0;
    frequencies.set(val, valCount + 1);
  }
  return frequencies;
}

// O(n + m)
function isValidAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const charMap1 = makeFreqCounter(str1);
  const charMap2 = makeFreqCounter(str2);

  if (charMap1.size !== charMap2.size) return false;

  for (let letter of charMap1.keys()) {
    if (charMap2.get(letter) !== charMap1.get(letter)) return false;
  }
  return true;
}
