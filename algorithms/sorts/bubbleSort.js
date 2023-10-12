// function bubbleSort (array){
//     for(let i = array.length -1; i >0; i--){//aqui temos a qtdd maxima de comparações para cada item, ex: o item 6 consegue ser comparado no max 5 X
//         for(let j = 0; j < i; j++) { //anda pelos index que serão comparados (ex: index 1 compara com até 5 itens, index 2 até 4....)
//             if(array [j] > array[j+1]){
//                 let temp = array[j]// coloca um ponteiro no primeiro item
//                 array[j] = array[j+1] //move o segundo para o lugar do primeio
//                 array[j+1] = temp //move o primeiro pro lugar do segundo
//             }
//         }
//     }
//     return array
// }

// function test() {
//     let myArray = [4,2,6,5,1,3];
//     bubbleSort(myArray);
//     console.log(myArray);
// }

// test();

/////////////////selection sort

// function selectionSort (array){
//     let min //variável que armazena o minimo
//     for (let i = 0; i < array.length-1; i++){//i é igual ao index
//         min = i
//         for(let j = i+1; j < array.length; j++){//j é sempre o proximo item de i
//             if(array[j] < array[min]) min = j
//         }
//         if(i !== min){
//             let temp = array[i]// coloca um ponteiro no primeiro item
//             array[i] = array[min] //move o minimo para o lugar do primeio
//             array[min] = temp //move o primeiro pro lugar do segundo
//         }
//     }
// return array
// }
// function test() {
//     let myArray = [4,2,6,5,1,3];
//     selectionSort(myArray);
//     console.log(myArray);
// }

// test();

////////////////// insertion sort

function insertionSort(array) {
  let temp; // ponteiro
  for (let i = 1; i < array.length; i++) {
    // i =1 significa que começa no segundo item
    temp = array[i]; // p onteiro no segundo item para começar
    for (var j = i - 1; array[j] > temp && j > -1; j--) {
      //item anterior a i q sera comparado e ir subtraindo p/comparar com tds os anteriores
      array[j + 1] = array[j]; //coloca o array[j] uma casa a frente
    }
    array[j + 1] = temp;
  }
  return array;
}

function test() {
  let myArray = [4, 2, 6, 5, 1, 3];
  insertionSort(myArray);
  console.log(myArray);
}

test();
