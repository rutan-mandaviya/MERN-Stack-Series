// Q1. merge sort

// let arr=[3,7,4,8,9,2,3,4,1]

function mergesort(arr, left, mid, right) {
  let i = left,
    j = mid + 1;
  let temp = [];

  while (i <= mid && j <= right) {
    if (arr[i] < arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }

}
    while (i <= mid) {temp.push(arr[i++])};
    while (j <= right){ temp.push(arr[j++])}
    for (let k = 0; k < temp.length; k++) {
      arr[left + k] = temp[k];
  }

l
}

function divide(arr, left, right) {
  if (left >= right) return;
  let mid = Math.floor((left + right) / 2);
  divide(arr, left, mid);
  divide(arr, mid + 1, right);
  mergesort(arr, left, mid, right);
}
let arr = [1, 4, 3, 2, 6];
let left = 0;
let right = arr.length - 1;

console.log(divide(arr, left, right));
console.log(arr);
