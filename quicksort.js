let array = [0, -1, 3, 5, 2, 6, 8, 1];

function quickSort(left, right, array) {
  if (right - left <= 0) {
    return array;
  } else {
    let pivot = array[right];
    let pivotIndex = partition(left, right, pivot, array);
    quickSort(left, pivotIndex - 1, array);
    quickSort(pivotIndex + 1, right, array);
  }

  return array;
}

function partition(left, right, pivot, a) {
  let leftPointer = left;
  let rightPointer = right - 1;

  while (true) {
    while (a[leftPointer] < pivot) {
      leftPointer++;
    }

    while (rightPointer > 0 && a[rightPointer] > pivot) {
      rightPointer--;
    }

    if (leftPointer >= rightPointer) {
      break;
    }

    swap(leftPointer, rightPointer, a);
  }

  // swap pivot
  swap(leftPointer, right, a);

  return leftPointer;
}

function swap(a, b, array) {
  const first = array[a];
  const second = array[b];

  array[a] = second;
  array[b] = first;
}

console.log(quickSort(0, array.length - 1, array));
