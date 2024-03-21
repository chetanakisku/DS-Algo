// Question : 

// Given an array with all distinct elements, find the largest three elements.

// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1). 

// Input: arr[] = {10, 4, 3, 50, 23, 90}
// Output: 90, 50, 23

// Input: arr[] = { 6, 8, 1, 9, 2, 1, 10, 10}
// Output: 10, 10, 9

const  arr = [6, 8, 1, 9, 2, 1, 10, 10];

function findLargest3Elements(arr) {
  let first = null,
    second = null,
    third = null;
  console.log({first, second, third});

  if (arr.length < 3) {
    return 'Not available';
  }

  first = arr[1];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] >= first) {
      third = second;
      second = first;
      first = arr[i];
    }

    if (arr[i] < first && arr[i] > second) {
      third = second;
      second = arr[i]
    }
  }

  return `${first}, ${second}, ${third}`;
}

function findLargest3ElementsUsingSort(arr) {
  const reverseSortedArr = arr.sort((a,b) => a-b).reverse();
  console.log(reverseSortedArr)
  return reverseSortedArr.slice(0,3);
}

const result = findLargest3Elements(arr);
const resultUsingSort = findLargest3ElementsUsingSort(arr);
console.log(`Largest three elements in given array [${arr}] using brute forceis ${result} and using sort is ${resultUsingSort}`);
