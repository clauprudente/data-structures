//leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
  let auxNumbers: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        const sum = nums[i] + nums[j];
        if (sum === target) {
          auxNumbers.push(i);
          auxNumbers.push(j);
          return auxNumbers;
        }
      }
    }
  }
  return auxNumbers;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
