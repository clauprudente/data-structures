function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex]; //coloca um ponteiro pra ter referencia
  array[firstIndex] = array[secondIndex]; ///troca de lugar
  array[secondIndex] = temp; /// novo segundo recebe o ponteiro, "ponteiro anda pra frente"
}

function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, pivotIndex, swapIndex);
  return swapIndex;
}
let myArray = [4, 6, 1, 7, 3, 2, 5];
console.log(pivot(myArray)); // mostra o index final do pivot
console.log(myArray);

//>>quicksort >> irá fazer esse metodo recursivamente até ordenar todo o array

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1); //pego o inicio do array até o index antes da posição final do pivot
    quickSort(array, pivotIndex + 1, right); //pega a posição posterior do array até o final
  }
  return array;
}

console.log(quickSort(myArray));
