
 // 1-vazifa:
  function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
}
let [first, second] = swap(1, 2);
console.log(first, second);

//2-vazifa: 

function assertString(value: unknown): asserts value is string {
  if (typeof value !== 'string') {
      throw new Error('Value is not a string');
  }
}
try {
  assertString("Hello"); 
  assertString(123); 
} catch (error) {
  console.log(error.message);
}


// 3-vazifa:

//quicksort
function quicksort(arr: number[]): number[] {
  if (arr.length <= 1) {
      return arr;
  }
  
  const pivot = arr[arr.length - 1];
  const left = arr.filter(x => x < pivot);
  const right = arr.filter(x => x >= pivot);

  return [...quicksort(left), pivot, ...quicksort(right)];
}


//mergesort
function mergesort(arr: number[]): number[] {
  if (arr.length <= 1) {
      return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergesort(left), mergesort(right));
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
      } else {
          result.push(right[j]);
          j++;
      }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
