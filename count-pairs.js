// add whatever parameters you deem necessary
function countPairs(arr, num) {
  arr.sort((a, b) => a - b);

  let pairCount = 0;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === num) {
      pairCount++;
      left++;
      right--;
    } else if (sum < num) {
      left++;
    } else {
      right--;
    }
  }
  return pairCount;
}
