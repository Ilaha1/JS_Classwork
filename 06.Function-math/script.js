// 1
const arr1 = ["a", "b", "c", "d", "e", "f", "j", "k", "y", "u"];
const arr11 = [1, 2, 3, 4, 5];
function getRandomLetter(abc) {
  return abc[Math.floor(Math.random() * abc.length)];
}
console.log(getRandomLetter(arr1));
console.log(getRandomLetter(arr11));

// 2
const arr2 = [1, 2, 3, 4, 14, 5, 6, 8];
let sum = 0;
function calcSum() {
  for (let item of arr2) {
    // if (!(item%2))
    if (item % 2 == 0) {
      sum += item;
    }
    return sum;
  }
}
console.log(sum);

//  3
const arr3 = [-3, -5, -9, 3, 0, true, false, -22];
const newArry = [];
let getPositiveNam = function () {
  for (i = 0; i < arr3.length; i++) {
    newArry.push(Math.abs(arr3[i]));
  }
  return newArry;
};
console.log(getPositiveNam());

// 4
const arr4 = [4, 9, 16, 18, 30, 36, 50];
const newArr = [];
const calcSquareRoot = (x) => {
  for (let i = 0; i < x.length; i++) {
    newArr.push(Math.floor(Math.sqrt(x[i])));
  }
  return newArr;
};
console.log(calcSquareRoot(arr4));
