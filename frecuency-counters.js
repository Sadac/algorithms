/**
 * Frecuency Counter problems
 * This pattern uses objects or sets to collect values/frecuencies of values.
 * This can often avoid the need for nested loops or O(n^2) operations with arrays/strings
 */


/**
 * Ex 1: My first try (not-frecuency counter, sort approach instead)
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding
 * value squared in the second array. The frecuency of values must be the same.
 *
 * Another 2nd possible solution besides mine:
 * - loop the array and for each iteration find in the second array if a square values
 *    matches the current value iteration.
 *      > if exist the square in the second array arr2.indexOf(arr1[i] ** 2) !== -1
 *      > then delete the element in the second array arr2.splice(arr2.indexOf(arr1[i] ** 2), 1)
 *          so the next i+1 will be compared with the remaining arr2
 *
 * The second approach is O(n^2), but my solution is O(n) because I dont have nested loops.
 * Its better 3 loops at the same level rather than having nested loops
 */
function same(arr1, arr2) {
  let isSameSquare = false;
  if (arr1.length !== arr2.length) {
    console.log(isSameSquare, arguments);
    return isSameSquare;
  }

  // order both arrays
  const arr1Ordered = arr1.sort();
  const arr2Ordered = arr2.sort();

  // loop the farr1Ordered and compare the same position with the arr2Ordered
  isSameSquare = true;
  for (let i = 0; i < arr1Ordered.length; i += 1) {
    if (arr1Ordered[i] ** 2 !== arr2Ordered[i]) {
      // If at least 1 compare is not the square, just return false
      isSameSquare = false;
    }
  }

  console.log(isSameSquare, arguments);
  return isSameSquare;
}
same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false (must be the same frecuency)

/**
 * This is the frecuency counter approach.
 * Store/collect in a Set or an Object the frecuency of the values
 */
function sameFrecuency(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frec1 = {};
  const frec2 = {};
  for (const val of arr1) {
    frec1[val] = (frec1[val] || 0) + 1;
  }
  for (const val of arr2) {
    frec2[val] = (frec2[val] || 0) + 1;
  }

  for (const key in frec1) {
    if (!(key ** 2 in frec2)) {
      return false;
    }
    if (frec2[key ** 2] !== frec1[key]) {
      return false;
    }
  }

  return true;
}
const r1 = sameFrecuency([1, 2, 3], [4, 1, 9]); // true
const r2 = sameFrecuency([1, 2, 3], [1, 9]); // false
const r3 = sameFrecuency([1, 2, 1], [4, 4, 1]); // false (must be the same frecuency)
const r4 = sameFrecuency([2, 3, 4], [4, 9, 16]); // true
console.log(r1, r2, r3, r4);

// frecuency counter with reduce
const phrase = 'awesome phrase to be counted';
const frecuency = phrase.split('').reduce((acum, p) => {
  if (!acum[p]) acum[p] = 0;
  if (acum.hasOwnProperty(p)) {
    acum[p] += 1;
  }
  return acum;
}, {});
console.log(JSON.stringify(frecuency));

// frecuency counter with reduce and order and filter.
const buses = ['Bus1', 'Bus2', 'Bus2', 'Bus3', 'Bus2', 'Bus3'];
const counter = buses.reduce((acum, bus) => {
  if (!acum[bus]) acum[bus] = 0;
  if (acum.hasOwnProperty(bus)) acum[bus] += 1;
  return acum;
}, {});
const entriesOrder = Object.entries(counter).sort((a, b) => b[1] - a[1]);
const filterLarge = entriesOrder.filter((el) => el[1] > 1);
const objData = {};
filterLarge.forEach((element) => {
  objData[element[0]] = element[1];
});
console.log(filterLarge, objData);

// Anagram challenge with frecuency counter pattern
// This problem can be solved by sorting the string and comparing as well
const validAnagram = (word1, word2) => {
  const countWords = (word) => word.split('').reduce((acum, w) => {
    if (!acum.hasOwnProperty(w)) acum[w] = 0;
    acum[w] += 1;
    return acum;
  }, {});
  const objWord1 = countWords(word1); // frecuency counter object1
  const objWord2 = countWords(word2); // frecuency counter object2

  for (let i = 0; i < word1.length; i += 1) {
    const letter = word1[i];
    // for each letter check ocurrences number are the same in both objects
    if (objWord1[letter] !== objWord2[letter]) return false;
  }

  return true;
};
const resultValidAnagram = validAnagram('anagrams', 'nagaram');
console.log(resultValidAnagram);
