//Longest increasing subsequence

function lis(arr, idx = -1, memo = null) {
  if (memo == null) {
    memo = new Array(arr.length).fill(-1);
  }

  if (idx == -1) {
    for (let i = arr.length - 1; i >= 0; i--) {
      lis(arr, i, memo);
    }
    return Math.max(...memo);
  }

  if (idx >= arr.length) return 0;

  if (memo[idx] !== -1) return memo[idx];

  let maxSequence = 1;
  for (let i = idx + 1; i < arr.length; i++) {
    if (arr[i] > arr[idx]) {
      maxSequence = Math.max(maxSequence, 1 + lis(arr, i, memo));
    }
  }
  memo[idx] = maxSequence;
  return maxSequence;
}

console.log(lis([4, 10, 4, 3, 8, 9], 0));
