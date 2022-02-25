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

/////////////////////////////
//Find the Oddd number from array
////////////////////////////
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

// const stray = (nums) => nums.reduce((a, b) => a ^ b);
// console.log(stray([3, 17, 17]));

// let a = 4;
// let b = 5;
// console.log(a ^ b);
// function even_or_odd(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// console.log(even_or_odd(2));

// function remove(s) {
//   return s.split("!").join("").concat("!");
// }
// console.log(remove("Hello World!"));

// const areaOrPerimeter = function (a, b) {
//   if (a === b) {
//     return a * b;
//   } else {
//     return a + a + b + b;
//   }
// };

// console.log(areaOrPerimeter(3, 3));

// function likes(names) {
//   let newStr = "";

//   if (names.length === 0) {
//     return "no one likes this";
//   } else if (names.length === 1) {
//     newStr = `${names[0]} likes this}`;
//   } else if (names.length === 2) {
//     newStr = `${names[0]} and ${names[1]} likes this`;
//   } else if (names.length === 3) {
//     newStr = `${names[0]}, ${names[1]} and ${names[2]} likes this`;
//   } else if (names.length >= 4) {
//     newStr = `${names[0]}, ${names[1]} and ${names.length - 2} others likes this`;
//   }

//   return newStr;
// }

// console.log(likes(["Peter", "Tony", "Dam", "Dam"]));
// function createPhoneNumber(numbers) {
//   let newStr = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
//   return newStr;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function updateLight(current) {
//   if (current === "red") {
//     return "green";
//   } else if (current === "green") {
//     return "yellow";
//   } else {
//     return "red";
//   }
// }

// console.log(updateLight("green"));

// function isTriangle(a, b, c) {
//   if (a + b < c || b + c < a || c + a < b) {
//     return false;
//   } else {
//     if (a <= 0 || b <= 0 || c <= 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// console.log(isTriangle(7, 2, 2));

// function findNextSquare(sq) {
//   var root1;
//   var nextroot;
//   if (Math.sqrt(sq) % 1 === 0) {
//     root1 = Math.sqrt(sq);
//     nextroot = root1 + 1;
//   } else {
//     return -1;
//   }
//   return nextroot * nextroot;
// }

// console.log(findNextSquare(114));

// function sortArray(array) {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     let take = array[i].reduce((a,b))

//   }
// }

// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

// function countBy(x, n) {
//   let z = [];
//   let newVal = x * n;

//   for (let i = x; i <= newVal; i += x) {
//     z.push(i);
//   }

//   return z;
// }

// console.log(countBy(2, 5));
// function findShort(s) {
//   let arr = s.split(" ");
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i].length);
//   }
//   return newArr.sort((a, b) => a - b)[0];
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// return masked string
function maskify(cc) {}

console.log(maskify("12347879797097979"));
