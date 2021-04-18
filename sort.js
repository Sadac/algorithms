/**
 * use of recursion to sort an array of numbers
 */
const data = [6, 1, 8, 4, 7, 6, 5, 4, 9];

const sort = (array) => {
  for (let i = 0; i < array.length - 1; i += 1) {
    const current = array[i];
    if (current > array[i + 1]) {
      array[i] = array[i + 1];
      array[i + 1] = current;
      sort(array);
    }
  }
  return array;
};
const result = sort(data);
console.log(result);
