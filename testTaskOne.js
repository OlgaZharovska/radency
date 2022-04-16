const chooseOptimalDistance = (t, k, ls) => {
  if (ls.length < k) return null;

  let maxSum = 0;
  let isMaxPossibleDistanceFound = false;

  function combination(arr, data, start, end, index, r) {
    if (index == r) {
      let tempSum = 0;

      for (let j = 0; j < r; j++) {
        tempSum += data[j];
      }

      if (tempSum === t) {
        isMaxPossibleDistanceFound = true;
        maxSum = tempSum;
      }

      if (tempSum > maxSum && tempSum < t) maxSum = tempSum;
    }

    if (isMaxPossibleDistanceFound) {
      return;
    }

    for (let i = start; i <= end && end - i + 1 >= r - index; i++) {
      data[index] = arr[i];
      combination(arr, data, i + 1, end, index + 1, r);
    }
  }

  function calculateCombination(arr, n, r) {
    let data = new Array(r);

    combination(arr, data, 0, n - 1, 0, r);
  }

  let n = ls.length;

  calculateCombination(ls, n, k);

  return maxSum ? maxSum : null;
};
