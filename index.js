//day 0
// function getMiddle(s) {
//   return s.slice((s.length - 1) / 2, s.length / 2 + 1);
// }

// console.log(getMiddle("VaLUEE"));

//day1
// function openOrSenior(data) {
//   let newArray = [];

//   for (var i = 0; i < data.length; i++) {
//     if (data[i][0] >= 55 && data[i][1] >= 7) {
//       newArray.push("Senior");
//     } else {
//       newArray.push("Opener");
//     }
//   }
//   return newArray;
// }

// console.log(
//   openOrSenior([
//     [18, 20],
//     [45, 2],
//     [61, 12],
//     [37, 6],
//     [21, 21],
//     [78, 9],
//   ])
// );

// function basicOp(operation, value1, value2) {
//   // Code
//   if (operation === "+") {
//     return value1 + value2;
//   } else if (operation === "-") {
//     return value1 - value2;
//   } else if (operation === "*") {
//     return value1 * value2;
//   } else if (operation === "/") {
//     return value1 / value2;
//   }
// }
// console.log(basicOp("+", 4, 7));

// function find_average(array) {
//   let average = 0;

//   for (let i = 0; i < array.length; i++) {
//     average += array[i];
//   }
//   if (array.length === 0) {
//     return average;
//   } else {
//     return average / array.length;
//   }
// }

// console.log(find_average([]));

// function grow(x) {
//   let total = 1;

//   for (let i = 0; i < x.length; i++) {
//     total *= x[i];
//   }
//   return total;
// }

// console.log(grow([1, 2, 3]));

// function findUniq(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[0] == arr[1] ? arr.pop() : arr[0];
// }

// console.log(findUniq([2, 2, 3, 2, 3]));

// function oddOrEven(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }

//   return sum % 2 === 0 ? "even" : "odd";
// }
// console.log(oddOrEven([1, 2, 2]));

// function wave(str) {
//   let newArr = [];
//   for (let i = 0; i < str.length; i++) {
//     let copy = str.split("");
//     if (copy[i] !== " ") {
//       copy[i] = copy[i].toUpperCase();
//       newArr.push(copy.join(""));
//     }
//   }
//   return newArr;
// }

// console.log(wave("hello"));

// Sum Numbers
// function sum(numbers) {
//   "use strict";
//   return numbers === 0 ? 0 : numbers.reduce((a, b) => a + b);
// }

// console.log(sum([1, 5.2, 4, 0, -1]));

// function towerBuilder(nFloors) {
//   return nFloors;
// }
// console.log(towerBuilder(3));

// function getSum(a, b) {
//   let sum = 0;

//   if (a === b) {
//     return a;
//   } else if (a > b) {
//     for (let i = b; i <= a; i++) {
//       sum += i;
//     }
//   } else if (a < b) {
//     for (let i = a; i <= b; i++) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(getSum(1, 0));

// function findOdd(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const count = arr.filter((value) => value === arr[i]).length;
//     // if (count % 2 == 1) {
//     //   return arr[i];
//     // }
//     // console.log(count);
//     return count;
//   }
//   // return -1;
// }

// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// function setAlarm(employed, vacation){
// if(employed ===true && vacation === false){
//   return true
// }else{
//   return false
// }
// }

// console.log(setAlarm(false,false));

// function getDivisorsCnt(n){
//   // todo
//   let arr = [];
//   let newArr = []
//   for(let i=1; i<=n;  i++){
//     arr.push(i)
//   }
//    arr.filter((a) => {
//     if(n%a===0){
//       newArr.push(a)
//     }
//   })
//   return newArr.length
// }

// console.log(getDivisorsCnt(5))

// function noSpace(x){
// let newStr = x.split(' ').join('')
// return newStr

// console.log(noSpace('wfwufy wiufgwif uwfgiw;oad ufwu'))

// function lovefunc(flower1, flower2){
//   if(flower1% 2 !== 0 && flower2 % 2 === 0){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(lovefunc(0,0))

// function digital_root(n) {
//   let newVal = n
//     .toString()
//     .split("")
//     .map(Number)
//     .reduce((a, b) => a + b)
//   if (n < 10) {
//     return n;

//   } else {

//       return  newVal
//   }

// }

// console.log(digital_root(245));

function sumOfMinimums(arr) {
  let newArr = 0;
  for (let i = 0; i < arr.length; i++) {
    // newArr += Math.min(...arr[i]);
    console.log(Math.min(...arr[i]));
  }
  return newArr;
}

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
);
