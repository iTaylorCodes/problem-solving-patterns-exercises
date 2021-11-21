// add whatever parameters you deem necessary
function constructNote(msg, letters) {
  if (letters === "") return false;

  const lettersFrequency = makeFreqCounter(letters);
  const msgFrequency = makeFreqCounter(msg);

  for (let letter of lettersFrequency.keys()) {
    if (lettersFrequency.get(letter) < msgFrequency.get(letter)) return false;
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
