for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    for (let k = 0; k < 2; k++) {
      for (let l = 0; l < 2; l++) {
        console.log(i, j, k, l);
      }
    }
  }
}

const generateNumbers = (bits, v, idx) => {
  if (idx >= bits) {
    console.log(v);
    return;
  }
  for (let i = 0; i < 2; i++) {
    v[idx] = i;
    generateNumbers(bits, v, idx + 1);
  }
};

generateNumbers(4, [0, 0, 0, 0], 0);

// -----------------------------
const isAllUnique = (v) => {
  let set = new Set();

  for (let elm of v) {
    set.add(elm);
  }

  return v.length === set.size;
};

const containsDuplicate = (v, idx) => {
  let key = v[idx];

  for (let i = 0; i < idx; i++) {
    if (v[i] === key) {
      return true;
    }
  }
  return false;
};

const printAllValidPermutations = (n, v, idx) => {
  if (idx >= n) {
    console.log(v);
    return;
  }

  for (let i = 1; i <= n; i++) {
    v[idx] = i;
    if (!containsDuplicate(v, idx)) {
      printAllValidPermutations(n, v, idx + 1);
    }
  }
};

printAllValidPermutations(3, [0, 0, 0], 0);

function printVectorPermutations(values, v, idx) {
  if (idx >= values.length) {
    console.log(v);
  } else {
    for (let i = 0; i < values.length; i++) {
      v[idx] = values[i];
      if (!containsDuplicate(v, idx)) {
        printVectorPermutations(values, v, idx + 1);
      }
    }
  }
}

printVectorPermutations([10, 20, 30], [0, 0, 0], 0);
