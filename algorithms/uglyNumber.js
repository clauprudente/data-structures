var isUgly = function (n) {
  let arr = [2, 3, 5];

  if (n === 1) return true;
  if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0) {
    for (let i = 0; i < arr.length; i++) {
      if (n / arr[i] === 2 || n / arr[i] === 3 || n / arr[i] === 5) return true;
    }
  }

  return false;
};

console.log(isUgly(8));
