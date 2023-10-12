function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let meio = Math.round((left + right) / 2);

  for (
    meio;
    arr[meio] !== val && right >= left;
    meio = Math.round((left + right) / 2)
  ) {
    if (val > arr[meio]) left = meio + 1;
    else right = meio - 1;
  }
  ///console.log(meio)
  return arr[meio] === val ? meio : -1;
}

let numeros = [1, 2, 3, 13, 31, 45, 55, 66, 77, 88, 99, 113, 131];
console.log(binarySearch(numeros, 78));
