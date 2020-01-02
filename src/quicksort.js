function quicksort(arr, first = 0, last = arr.length - 1) {
  let first_anchor = first;
  let last_anchor = last;

  let pivot = first;
  let direction = -1;
  let current = last;

  if ((last-first) < 1) {
    return arr;
  }

  while (direction != 0) {
    if (direction === -1) {
      current = last;
      if (arr[current] < arr[pivot]) {
        swap(arr, current, pivot);
        direction = 1;

        const tmp = current;
        current = pivot;
        pivot = tmp;
        
      }
      last--;
      
    }

    if (direction === 1) {
      current = first;
      if (arr[current] > arr[pivot]) {
        swap(arr, current, pivot);
        direction = -1;

        const tmp = current;
        current = pivot;
        pivot = tmp;

      }
      first++;
      
    }
    
    if (first > last) {
      direction = 0;
    }
  }
 
  quicksort(arr, first_anchor, pivot-1);
  quicksort(arr, pivot+1, last_anchor);

  return arr;
}

function swap(arr, a, b) {
  const s = arr[a];
  arr[a] = arr[b];
  arr[b] = s;
}

module.exports = quicksort;
