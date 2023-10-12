////>>MERGE<<<
function merge(array1, array2) {
  let combined = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combined.push(array1[i]);
      i++;
    } else {
      combined.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    combined.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    combined.push(array2[j]);
    j++;
  }
  return combined;
}

console.log(merge([a, b, c, d], [a, b, c, d, e]));

//////>> MERGESORT<<

function mergeSort(array) {
  if (array.length === 1) return array;

  let mid = Math.floor(array.length / 2); //divide o array ao meio
  let left = array.slice(0, mid); ///pega do inicio do array até o meio
  let right = array.slice(mid); //pega do meio até o final

  return merge(mergeSort(left), mergeSort(right)); // vai dividir o array ao meio até estar com 1 item, ou seja, ordenado,
  // e vai voltar juntando e ordenando usando o merge
}
console.log(mergeSort([13, 7, 2, 9]));
