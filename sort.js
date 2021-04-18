/**
 * recursive sorting
 */
const array = [4, 2, 29, 1, 0, 66, 3, 90];

const sort = (arr) => {
  for (let i = 0; i < array.length; i += 1) {
    const current = arr[i];
    if (current > arr[i + 1]) {
      arr[i] = arr[i + 1];
      arr[i + 1] = current;
      sort(arr);
    }
  }

  return arr;
};
const result = sort(array);
console.log(result);
