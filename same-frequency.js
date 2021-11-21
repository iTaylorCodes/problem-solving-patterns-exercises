// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
  if (String(int1).length !== String(int2).length) return false;

  const digitMap1 = makeFreqCounter(String(int1));
  const digitMap2 = makeFreqCounter(String(int2));

  if (digitMap1.size !== digitMap2.size) return false;

  for (let num of digitMap1.keys()) {
    if (digitMap2.get(num) !== digitMap1.get(num)) return false;
  }
  return true;
}

function makeFreqCounter(str) {
  const frequencies = new Map();
  for (let val of str) {
    let valCount = frequencies.get(val) || 0;
    frequencies.set(val, valCount + 1);
  }
  return frequencies;
}
