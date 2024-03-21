console.log('testing');

const arr = [ 6, 46, 34,4200000, 23, 13, 53, 4];
let max = 0;
let min = arr[0];

function getMinMax () {
  for(let i=0; i< arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return {max, min};
}

const ans = getMinMax();
console.log(ans)