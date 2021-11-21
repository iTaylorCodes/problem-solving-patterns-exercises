// add whatever parameters you deem necessary
function averagePair(arr, target) {
  if (arr.length < 0) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    let average = sum / 2;
    if (average === target) {
      return true;
    } else if (average > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
